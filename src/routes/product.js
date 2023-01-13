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
routes.get('/getProduct', getAllProduct);

//read product by id
routes.get('/getProductId/:idProduct', getProductById);

//create product
routes.post('/create-product', createNewProduct);

//update product
routes.patch('/update-product/:idProduct', updateProduct);

//delete product
routes.delete('/delete-product/:idProduct', deleteProduct);

module.exports = routes;
