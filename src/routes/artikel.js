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
routes.get('/article-list', getAllArticle);

//Read article by id
routes.get('/article-detail/:idArticle', getArticleById);

//create article
routes.post('/create-article', createNewArticle);

//update article
routes.patch('/update-article/:idArticle', updateArticle);

//delete article
routes.delete('/delete-article/:idArticle', deleteArticle);

module.exports = routes;
