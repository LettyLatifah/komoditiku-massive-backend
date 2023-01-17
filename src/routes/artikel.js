const express = require('express');
const routes = express();
const {
  articleValidator,
  getAllArticle,
  getArticleById,
  createNewArticle,
  updateArticle,
  deleteArticle,
} = require('../controller/artikel');

//Read All Article List
routes.get('/article', getAllArticle);

//Read article by id
routes.get('/article/:idArticle', [articleValidator, getArticleById]);

//create article
routes.post('/article', createNewArticle);

//update article
routes.patch('/article/:idArticle', [articleValidator, updateArticle]);

//delete article
routes.delete('/article/:idArticle', [articleValidator, deleteArticle]);

module.exports = routes;
