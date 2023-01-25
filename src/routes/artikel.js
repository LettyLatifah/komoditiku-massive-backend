const express = require('express');
const routes = express();
const {
  articleValidator,
  getAllArticle,
  getArticleById,
  getWriter,
  createNewArticle,
  createNewWriter,
  updateArticle,
  deleteArticle,
} = require('../controller/artikel');

const multer = require('../middleware/multer_artikel');

//Read All Article List
routes.get('/article', getAllArticle);

//Read article by id
routes.get('/article/:idArticle', [articleValidator, getArticleById]);

//Read All Article List
routes.get('/article-writer', getWriter);

//Read All Article List
routes.post('/article-writer', multer, createNewWriter);

//create article
routes.post('/article', multer, createNewArticle);

//update article
routes.patch('/article/:idArticle', multer, [articleValidator, updateArticle]);

//delete article
routes.delete('/article/:idArticle', [articleValidator, deleteArticle]);

module.exports = routes;
