require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

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

module.exports = db.promise();
