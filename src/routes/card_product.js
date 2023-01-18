const express = require('express');
const routes = express();
const {
  productValidator,
  getCardProduct,
  createCardProduct,
  updateCard,
  deleteCard,
} = require('../controller/card_product');

const multer = require('../middleware/multer');

//read product card
routes.get('/products-card', getCardProduct);

//create card product
routes.post('/products-card', multer, createCardProduct);

//update product
routes.patch('/products-card/:idCard', multer, [productValidator, updateCard]);

//delete product
routes.delete('/products-card/:idCard', [productValidator, deleteCard]);

module.exports = routes;
