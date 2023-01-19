const express = require('express');
const routes = express();
const {
  productValidator,
  getAllProduct,
  getProductById,
  createNewProduct,
  updateProduct,
  deleteProduct,
} = require('../controller/product');

const multer = require('../middleware/multer');

//Read Product
routes.get('/products', getAllProduct);

//read product by id
routes.get('/products/:idProduct', [productValidator, getProductById]);

//create product
routes.post('/products', multer, createNewProduct);

//update product
routes.patch('/products/:idProduct', multer, [productValidator, updateProduct]);

//delete product
routes.delete('/products/:idProduct', [productValidator, deleteProduct]);

module.exports = routes;
