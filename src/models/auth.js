const db = require('../config/database');

const emailCheck = (email) => {
  const sqlQuery = `SELECT id, email FROM users WHERE email ='${email}'`;

  return db.execute(sqlQuery);
};

const registerUser = (name, email, hash) => {
  const sqlQuery = `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${hash}');`

  return db.execute(sqlQuery);
};

const loginUser = (email) => {
  const sqlQuery = `SELECT id, email, password FROM users WHERE email = '${email}'`;

  return db.query(sqlQuery);
};
module.exports = { emailCheck, registerUser, loginUser };
