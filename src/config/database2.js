require('dotenv').config();
const { createPool } = require('mysql2/promise');

const pool = createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

module.exports = {
  query: async (query) => {
    try {
      const [value] = await pool.query(query);
      return value;
    } catch (error) {
      console.log(error);
    }
  },
};
