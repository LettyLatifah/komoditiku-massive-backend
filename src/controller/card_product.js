const cardModel = require('../models/card_product');

const productValidator = async (req, res, next) => {
  const { idCard } = req.params;
  try {
    const [data] = await cardModel.checkProduct(idCard);

    if (data.length == 0)
      return res.status(400).json({ message: 'Product not found', data: null });

    next();
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong' });
  }
};

const getCardProduct = async (_, res) => {
  try {
    const [data] = await cardModel.getCardProduct();
    res.json({
      message: 'Get Card Product Success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const createCardProduct = async (req, res) => {
  const { file, body } = req;

  if (req.file === undefined)
    return res.status(400).json({ message: 'Foto product dibutuhkan!' });

  const data = {
    ...body,
    foto_produk: file.filename,
    // foto_umkm: file.filename,
    // multiple: fileName
  };

  try {
    await cardModel.createCardProduct(data);
    res.status(201).json({
      message: 'Add Card Product Success',
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const updateCard = async (req, res) => {
  const { idCard } = req.params;
  const { file, body } = req;

  if (req.file === undefined)
    return res.status(400).json({ message: 'Foto product dibutuhkan!' });

  const data = {
    ...body,
    foto_produk: file.filename,
  };

  try {
    await cardModel.updateCard(data, idCard);

    res.json({
      message: 'update card product success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const deleteCard = async (req, res) => {
  const { idCard } = req.params;

  try {
    await cardModel.deleteCard(idCard);
    res.json({
      message: 'Delete Card Success',
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
  getCardProduct,
  createCardProduct,
  updateCard,
  deleteCard,
};
