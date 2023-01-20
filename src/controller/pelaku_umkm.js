const umkmModels = require('../models/pelaku_umkm');

const umkmValidator = async (req, res, next) => {
  const { idUmkm } = req.params;

  try {
    const [data] = await umkmModels.checkUmkm(idUmkm);
    if (data.length == 0)
      return res
        .status(400)
        .json({ message: 'Pelaku UMKM not found', data: null });

    next();
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Something went wrong', errorMessage: error });
  }
};

const getAllPelakuUmkm = async (_, res) => {
  try {
    const [data] = await umkmModels.getAllPelakuUmkm();
    res.json({
      message: 'Get All Pelaku UMKM Success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const getPelakuUmkmById = async (req, res) => {
  const { idProduct } = req.params;

  try {
    const [data] = await umkmModels.getAllPelakuUmkmById(idUmkm);
    res.json({
      message: 'Get pelaku umkm by id Success',
      data: data[0],
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const createPelakuUmkm = async (req, res) => {
  const { file, body } = req;
  if (req.file === undefined)
    return res.status(400).json({ message: 'Foto Pelaku UMKM dibutuhkan!' });

  const data = {
    ...body,
    foto_umkm: file.filename,
  };

  try {
    await umkmModels.createPelakuUmkm(data);
    return res.status(201).json({
      message: 'Add New Pelaku UMKM Success',
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const updatePelakuUmkm = async (req, res) => {
  const { idUmkm } = req.params;
  const { file, body } = req;

  if (req.file === undefined)
    return res.status(400).json({ message: 'Foto Pelaku UMKM dibutuhkan!' });

  const data = {
    ...body,
    foto_umkm: file.filename,
  };

  try {
    await umkmModels.updatePelakuUmkm(data, idUmkm);
    res.json({
      message: 'Update Pelaku UMKM Success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const deletePelakuUmkm = async (req, res) => {
  const { idUmkm } = req.params;

  try {
    await umkmModels(idUmkm);
    res.json({
      message: 'Delete Pelaku UMKM Success',
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
  umkmValidator,
  getAllPelakuUmkm,
  getPelakuUmkmById,
  createPelakuUmkm,
  updatePelakuUmkm,
  deletePelakuUmkm,
};
