const db = require('../config/database');

const emailCheck = (email) => {
  const sqlQuery = `SELECT id FROM users WHERE email ='${email}'`;

  return db.execute(sqlQuery);
};

const registerUser = (email, hash) => {
  const sqlQuery = `INSERT INTO users (email, password) VALUES ('${email}', '${hash}');`;

  return db.execute(sqlQuery);
};

const loginUser = (email) => {
  const sqlQuery = `SELECT id, email, password FROM users WHERE email = '${email}'`;

  return db.query(sqlQuery);
};
module.exports = { emailCheck, registerUser, loginUser };
