const express = require('express');
const routes = express();
const {
  productValidator,
  getAllProduct,
  getProductById,
  getProductUmkm,
  getProductMentah,
  getProductJadi,
  createNewProduct,
  updateProduct,
  deleteProduct,
} = require('../controller/product');

const multer = require('../middleware/multer_product');

//Read Product
routes.get('/products', getAllProduct);

//read product by id
routes.get('/products/:idProduct', [productValidator, getProductById]);

//read product  dan pelaku umkm
routes.get('/products-umkm/', getProductUmkm);

//read produk mentah
routes.get('/products-mentah', getProductMentah);

//read produk jadi
routes.get('/products-jadi', getProductJadi);

//create product
routes.post('/products', multer, createNewProduct);

//update product
routes.patch('/products/:idProduct', multer, [productValidator, updateProduct]);

//delete product
routes.delete('/products/:idProduct', [productValidator, deleteProduct]);

module.exports = routes;
