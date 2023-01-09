const db = require('../config/database');

const getAllUsers = () => {
  const sqlQuery = 'SELECT * FROM users';
  return db.execute(sqlQuery);
};

const createNewUSer = (body) => {
  const sqlQuery = `INSERT INTO users (name, email, address) 
                    VALUES ('${body.name}', '${body.email}', '${body.address}')`;

  return db.execute(sqlQuery);
};

const updateUser = (body, idUser) => {
  const sqlQuery = `UPDATE users 
                    SET name='${body.name}', email='${body.email}', address='${body.address}' WHERE id=${idUser}`;

  return db.execute(sqlQuery);
};

const deleteUser = (idUser) => {
  const sqlQuery = `DELETE FROM users WHERE id=${idUser}`;

  return db.execute(sqlQuery);
};

module.exports = {
  getAllUsers,
  createNewUSer,
  updateUser,
  deleteUser,
};
