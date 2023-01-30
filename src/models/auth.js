const db = require('../config/database');

const nameCheck = (name) => {
  const sqlQuery = `SELECT id, name FROM users WHERE name ='${name}'`;

  return db.execute(sqlQuery);
};

const registerUser = (name, email, hash) => {
  const sqlQuery = `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${hash}');`

  return db.execute(sqlQuery);
};

const loginUser = (email) => {
  const sqlQuery = `SELECT id, name, email, password FROM users WHERE email = '${email}'`;

  return db.query(sqlQuery);
};
module.exports = { nameCheck, registerUser, loginUser };
