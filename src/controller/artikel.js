const articleModel = require('../models/artikel');

const getAllArticle = async (_, res) => {
  try {
    const [data] = await articleModel.getAllArticle();
    res.json({
      message: 'Get All Article Success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const getArticleById = () => {};

const createNewArticle = () => {};

const updateArticle = () => {};

const deleteArticle = () => {};

module.exports = {
  getAllArticle,
  getArticleById,
  createNewArticle,
  updateArticle,
  deleteArticle,
};
