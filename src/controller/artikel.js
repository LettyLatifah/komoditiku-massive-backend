const articleModel = require('../models/artikel');

const articleValidator = async (req, res, next) => {
  const { idArticle } = req.params;

  try {
    const [data] = await articleModel.checkArticle(idArticle);

    if (data.length == 0)
      return res.status(400).json({ message: 'Article not found', data: null });

    next();
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong' });
  }
};

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
  articleValidator,
  getAllArticle,
  getArticleById,
  createNewArticle,
  updateArticle,
  deleteArticle,
};
