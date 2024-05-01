const { db } = require('@vercel/postgres');
const { careers } = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedCareers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "careers" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS careers (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        salary VARCHAR(255) NOT NULL,
        hourly VARCHAR(255) NOT NULL
      );
    `;
    console.log(`Created "careers" table`);
    // Insert data into the "careers" table
    const insertedCareers = await Promise.all(
      careers.map(
        (career) => client.sql`
        INSERT INTO careers (id, name, salary, hourly)
        VALUES (${career.id}, ${career.name}, ${career.salary}, ${career.hourly})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );
    console.log(`Seeded ${insertedCareers.length} careers`);
    return {
      createTable,
      careers: insertedCareers,
    };
  } catch (error) {
    console.error('Error seeding careers:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedCareers(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
