const express = require('express');
const articleController = require('../controller/artikel');
const router = express.Router();

//Read All Article List
router.get('/', articleController.getAllArticle);

//Read article by id
router.get('/:idArticle', articleController.getArticleById);

//create article
router.post('/', articleController.createNewArticle);

//update article
router.patch('/:idArticle', articleController.updateArticle);

//delete article
router.delete('/:idArticle', articleController.deleteArticle);

module.exports = router;
