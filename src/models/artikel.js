const db = require('../config/database');

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
  getAllArticle,
  getArticle,
  getArticleById,
  createNewArticle,
  updateArticle,
  deleteArticle,
};
