db = require('../config/database');

getAllUsers = () => {
  const sqlQuery = 'SELECT * FROM users';
  return db.execute(sqlQuery);
};

module.exports = {
  getAllUsers,
};
