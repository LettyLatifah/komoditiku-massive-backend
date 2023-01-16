const db = require('../config/database');

const queryCheck = (emailCheck) => {
  const sqlQuery = `SELECT id FROM users WHERE email ='${emailCheck}'`;

  return db.execute(sqlQuery);
};

const registerUser = (email, hash) => {
  const sqlQuery = `INSERT INTO users (email, password) VALUES ('${email}', '${hash}');`;

  return db.execute(sqlQuery);
};

module.exports = { queryCheck, registerUser };
