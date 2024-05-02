const { db } = require('@vercel/postgres');
const { colleges } = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedColleges(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "colleges" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS colleges (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        type VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        state VARCHAR(255) NOT NULL,
        total_cost_in_state_off_campus NUMERIC NOT NULL,
        total_cost_out_of_state_off_campus NUMERIC NOT NULL
      );
    `;
    console.log(`Created "colleges" table`);
    // Insert data into the "colleges" table
    const insertedColleges = await Promise.all(
      colleges.map(
        (college) => client.sql`
        INSERT INTO colleges (id, name, type, city, state, total_cost_in_state_off_campus, total_cost_out_of_state_off_campus)
        VALUES (${college.id}, ${college.name}, ${college.type}, ${college.address.city}, ${college.address.state}, ${college.totalCostInStateOffCampus}, ${college.totalCostOutOfStateOffCampus})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );
    console.log(`Seeded ${insertedColleges.length} colleges`);
    return {
      createTable,
      colleges: insertedColleges,
    };
  } catch (error) {
    console.error('Error seeding colleges:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedColleges(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
