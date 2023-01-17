const articleModel = require('../models/artikel');

const getAllArticle = async (_, res) => {
  try {
    const [data] = await articleModel.getAllArticle();

    // const data = await query(getArticle);
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

const getArticleById = async (req, res) => {
  const { idArticle } = req.params;

  try {
    const [data] = await articleModel.getArticleById(idArticle);
    res.json({
      message: 'Get article by id successs',
      data: { id: idArticle, data },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

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
