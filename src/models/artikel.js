const db = require('../config/database');

const checkArticle = (idArticle) => {
  const sqlQuery = `SELECT id FROM artikel WHERE id=${idArticle}`;

  return db.execute(sqlQuery);
};

const getAllArticle = () => {
  const sqlQuery = 'SELECT * FROM artikel';

  return db.execute(sqlQuery);
};

const getArticle = () => {
  const sqlQuery = 'SELECT * FROM artikel';

  return sqlQuery;
};

const getArticleById = (idArticle) => {
  const sqlQuery = `SELECT * FROM artikel WHERE id=${idArticle}`;

  return db.execute(sqlQuery);
};

const createNewArticle = (body) => {};

const updateArticle = () => {};

const deleteArticle = () => {};

module.exports = {
  checkArticle,
  getAllArticle,
  getArticle,
  getArticleById,
  createNewArticle,
  updateArticle,
  deleteArticle,
};
