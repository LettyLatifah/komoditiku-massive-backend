const productModel = require('../models/product');

const getAllProduct = async (req, res) => {
  try {
    const [data] = await productModel.getAllProduct();
    res.json({
      message: 'Get All Product Success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const getProductById = async (req, res) => {
  const { idProduct } = req.params;

  try {
    const [data] = await productModel.getProductById(idProduct);
    res.json({
      message: 'Get product by id Success',
      data: { id: idProduct, data },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const createNewProduct = async (req, res) => {
  const { body } = req;

  try {
    await productModel.createNewProduct(body);
    res.status(201).json({
      message: 'Add New Product Success',
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const updateProduct = async (req, res) => {
  const { idProduct } = req.params;
  const { body } = req;
  try {
    await productModel.updateProduct(body, idProduct);
    res.json({
      message: 'Update Product Success',
      data: { id: idProduct, ...body },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const deleteProduct = async (req, res) => {
  const { idProduct } = req.params;

  try {
    await productModel.deleteProduct(idProduct);
    res.json({
      message: 'Delete Product Success',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllProduct,
  getProductById,
  createNewProduct,
  updateProduct,
  deleteProduct,
};
