const db = require('../config/database');

const getAllConsulList = () => {
  const sqlQuery = 'SELECT * FROM konsultasi';
  return db.execute(sqlQuery);
};

const getConsulDetailById = () => {};

const addConsulRequest = () => {};

module.exports = { getAllConsulList, getConsulDetailById, addConsulRequest };
