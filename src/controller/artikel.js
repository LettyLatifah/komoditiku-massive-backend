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

const getWriter = async (_, res) => {
  try {
    const [data] = await articleModel.getWriter();

    res.json({
      message: 'Get All Article Writer Success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const createNewArticle = async (req, res) => {
  const { file, body } = req;

  if (req.file === undefined)
    return res.status(400).json({ message: 'Foto Artikel dibutuhkan!' });

  const data = {
    ...body,
    foto_artikel: file.filename,
  };

  try {
    await articleModel.createNewArticle(data);
    res.status(201).json({
      message: 'Add Article Success',
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const createNewWriter = async (req, res) => {
  const { file, body } = req;

  if (req.file === undefined)
    return res
      .status(400)
      .json({ message: 'Foto Penulis Artikel dibutuhkan!' });

  const data = {
    ...body,
    foto_artikel: file.filename,
  };

  try {
    await articleModel.createNewWriter(data);
    res.status(201).json({
      message: 'Add Article Success',
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const updateArticle = async (req, res) => {
  const { idArticle } = req.params;
  const { file, body } = req;

  if (req.file === undefined)
    return res.status(400).json({ message: 'Foto artikel dibutuhkan!' });

  const data = {
    ...body,
    foto_artikel: file.filename,
  };

  try {
    await articleModel.updateArticle(data, idArticle);
    res.json({
      message: 'Update Article Success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const deleteArticle = async (req, res) => {
  const { idArticle } = req.params;

  try {
    await articleModel.deleteArticle(idArticle);
    res.json({
      message: 'Delete Article Success',
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
  articleValidator,
  getAllArticle,
  getArticleById,
  getWriter,
  createNewArticle,
  createNewWriter,
  updateArticle,
  deleteArticle,
};
