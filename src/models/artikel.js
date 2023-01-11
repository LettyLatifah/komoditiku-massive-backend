const db = require('../config/database');

const getAllArticle = () => {
  const sqlQuery = 'SELECT * FROM artikel';

  return db.execute(sqlQuery);
};

const getArticleById = (idArticle) => {};

const createNewArticle = (body) => {};

const updateArticle = () => {};

const deleteArticle = () => {};

module.exports = {
  getAllArticle,
  getArticleById,
  createNewArticle,
  updateArticle,
  deleteArticle,
};
