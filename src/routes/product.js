const express = require('express');
const routes = express();
const {
  getAllProduct,
  getProductById,
  createNewProduct,
  updateProduct,
  deleteProduct,
} = require('../controller/product');

//Read Product
routes.get('/products', getAllProduct);

//read product by id
routes.get('/products/:idProduct', getProductById);

//create product
routes.post('/products', createNewProduct);

//update product
routes.patch('/products/:idProduct', updateProduct);

//delete product
routes.delete('/products/:idProduct', deleteProduct);

module.exports = routes;
