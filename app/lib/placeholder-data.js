// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const careers = [
  {
    id: '0018dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Electrician',
    salary: 6159000,
    hourly: 2961,
  },
  {
    id: '0028dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Plumber',
    salary: 6155000,
    hourly: 2959,
  },
  {
    id: '0038dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Registered Nurse',
    salary: 8607000,
    hourly: 4138,
  },
  {
    id: '0048dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Nurse Practitioner',
    salary: 12626000,
    hourly: 6070,
  },
  {
    id: '0058dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Software Developer',
    salary: 13227000,
    hourly: 6359,
  },
  {
    id: '0068dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Kindergarten Teacher',
    salary: 6269000,
    hourly: 3014,
  },
  {
    id: '0078dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Preschool Teacher',
    salary: 3713000,
    hourly: 1785,
  },
  {
    id: '0088dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Firefighter',
    salary: 5712000,
    hourly: 2746,
  },
  {
    id: '0098dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Lawyer',
    salary: 14576000,
    hourly: 7008,
  },
  {
    id: '0108dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Pediatrician, General',
    salary: 19869000,
    hourly: 9552,
  },
  {
    id: '0118dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Veterinarian',
    salary: 11910000,
    hourly: 5726,
  },
  {
    id: '0138dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Dental Hygienist',
    salary: 8753000,
    hourly: 4208,
  },
  {
    id: '0148dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Paramedic',
    salary: 5318000,
    hourly: 2557,
  },
  {
    id: '0158dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Recycling and Reclamation Worker',
    salary: 3766000,
    hourly: 1811,
  },
];

const colleges = [
  {
    id: '0018dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Purdue University-Main Campus',
    type: 'Public',
    address: { city: 'West Lafayette', state: 'Indiana' },
    totalCostInStateOffCampus: 2562200,
    totalCostOutOfStateOffCampus: 4442400,
  },
  {
    id: '0028dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'University of Notre Dame',
    type: 'Private',
    address: { city: 'Notre Dame', state: 'Indiana' },
    totalCostInStateOffCampus: 8327100,
    totalCostOutOfStateOffCampus: 8327100,
  },
  {
    id: '0038dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Ivy Tech Community College',
    type: 'Public',
    address: { city: 'Indianapolis', state: 'Indiana' },
    totalCostInStateOffCampus: 2078600,
    totalCostOutOfStateOffCampus: 2533900,
  },
  {
    id: '0048dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Ohio State University-Main Campus',
    type: 'Public',
    address: { city: 'Columbus', state: 'Ohio' },
    totalCostInStateOffCampus: 3099700,
    totalCostOutOfStateOffCampus: 5650300,
  },
  {
    id: '0058dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Rose-Hulman Institute of Technology',
    type: 'Private',
    address: { city: 'Terre Haute', state: 'Indiana' },
    totalCostInStateOffCampus: 7789000,
    totalCostOutOfStateOffCampus: 7789000,
  },
  {
    id: '0068dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Indiana Institute of Technology',
    type: 'Private',
    address: { city: 'Fort Wayne', state: 'Indiana' },
    totalCostInStateOffCampus: 4829500,
    totalCostOutOfStateOffCampus: 4829500,
  },
  {
    id: '0078dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'University of Saint Francis-Fort Wayne',
    type: 'Private',
    address: { city: 'Fort Wayne', state: 'Indiana' },
    totalCostInStateOffCampus: 5045000,
    totalCostOutOfStateOffCampus: 5045000,
  },
  {
    id: '0088dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Butler University',
    type: 'Private',
    address: { city: 'Indianapolis', state: 'Indiana' },
    totalCostInStateOffCampus: 6721000,
    totalCostOutOfStateOffCampus: 6721000,
  },
  {
    id: '0098dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Miami University-Oxford',
    type: 'Public',
    address: { city: 'Oxford', state: 'Ohio' },
    totalCostInStateOffCampus: 3875700,
    totalCostOutOfStateOffCampus: 6097300,
  },
];

const customers = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Hector Simpson',
    email: 'hector@simpson.com',
    image_url: '/customers/hector-simpson.png',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Steven Tey',
    email: 'steven@tey.com',
    image_url: '/customers/steven-tey.png',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Steph Dietz',
    email: 'steph@dietz.com',
    image_url: '/customers/steph-dietz.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    name: 'Emil Kowalski',
    email: 'emil@kowalski.com',
    image_url: '/customers/emil-kowalski.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[7].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[6].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-18',
  },
  {
    customer_id: customers[0].id,
    amount: 8945,
    status: 'paid',
    date: '2023-10-04',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

module.exports = {
  careers,
  colleges,
  users,
  customers,
  invoices,
  revenue,
};
