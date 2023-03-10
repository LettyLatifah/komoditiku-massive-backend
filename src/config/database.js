require('dotenv').config();
const mysql = require('mysql2');
// const { createPool } = require('mysql2/promise');

const db = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

module.exports = db.promise();

// const db = createPool({
//   host: process.env.HOST,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE,
// });

// module.exports = {
//   query: async (query) => {
//     try {
//       const [value] = await db.query(query);
//       return value;
//     } catch (error) {
//       console.log(error);
//     }
//   },
// };
