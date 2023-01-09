const express = require('express');
const productController = require('../controller/product.js');
const router = express.Router();

//Read Product
router.get('/', productController.getAllProduct);

//create product
router.post('/', productController.createNewProduct);

//update product
router.patch('/:idProduct', productController.updateProduct);

//delete product
router.delete('/:idProduct', productController.deleteProduct);

module.exports = router;
