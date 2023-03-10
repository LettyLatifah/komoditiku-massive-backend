const productModel = require('../models/product');

const productValidator = async (req, res, next) => {
  const { idProduct } = req.params;
  try {
    const [data] = await productModel.checkProduct(idProduct);

    if (data.length == 0)
      return res.status(400).json({ message: 'Product not found', data: null });

    next();
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong' });
  }
};

const getAllProduct = async (_, res) => {
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
      data: data[0],
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const getProductUmkm = async (_, res) => {
  try {
    const [data] = await productModel.getProductUmkm();
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

const getProductMentah = async (_, res) => {
  try {
    const [data] = await productModel.getProductMentah();
    res.json({
      message: 'Get All Product Mentah Success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const getProductJadi = async (_, res) => {
  try {
    const [data] = await productModel.getProductJadi();
    res.json({
      message: 'Get All Product Jadi Success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};
const createNewProduct = async (req, res) => {
  // const { files, body } = req;
  const { file, body } = req;

  // if (req.files === undefined)
  if (req.file === undefined)
    return res.status(400).json({ message: 'Foto product dibutuhkan!' });

  // let fileName = new Array();
  // files.map((val, undefined) => {
  //   fileName.push(val.filename);
  // });

  const data = {
    ...body,
    foto_produk: file.filename,
    // multiple: fileName
  };
  try {
    await productModel.createNewProduct(data);
    return res.status(201).json({
      message: 'Add New Product Success',
      data,
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
  const { file, body } = req;

  if (req.file === undefined)
    return res.status(400).json({ message: 'Foto product dibutuhkan!' });

  const data = {
    ...body,
    foto_produk: file.filename,
  };

  try {
    await productModel.updateProduct(data, idProduct);
    res.json({
      message: 'Update Product Success',
      data: data,
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
  productValidator,
  getAllProduct,
  getProductById,
  getProductUmkm,
  getProductMentah,
  getProductJadi,
  createNewProduct,
  updateProduct,
  deleteProduct,
};
