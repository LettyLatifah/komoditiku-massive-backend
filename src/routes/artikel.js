const express = require('express');
const routes = express();
const {
  getAllArticle,
  getArticleById,
  createNewArticle,
  updateArticle,
  deleteArticle,
} = require('../controller/artikel');

//Read All Article List
routes.get('/article', getAllArticle);

//Read article by id
routes.get('/article/:idArticle', getArticleById);

//create article
routes.post('/article', createNewArticle);

//update article
routes.patch('/article/:idArticle', updateArticle);

//delete article
routes.delete('/article/:idArticle', deleteArticle);

module.exports = routes;
