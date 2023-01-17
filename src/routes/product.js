const express = require('express');
const routes = express();
const {
  productValidator,
  getAllProduct,
  getProductById,
  createCardProduct,
  createNewProduct,
  updateProduct,
  deleteProduct,
} = require('../controller/product');

const multer = require('../middleware/multer');

//Read Product
routes.get('/products', getAllProduct);

//read product by id
routes.get('/products/:idProduct', [productValidator, getProductById]);

//create card product
routes.post('/products-card', createCardProduct);

//create product
routes.post('/products', multer, createNewProduct);

//update product
routes.patch('/products/:idProduct', [productValidator, updateProduct]);

//delete product
routes.delete('/products/:idProduct', [productValidator, deleteProduct]);

module.exports = routes;
