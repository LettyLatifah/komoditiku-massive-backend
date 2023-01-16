const consulModel = require('../models/konsultasi');

const consulValidator = async (req, res, next) => {
  const { idConsul } = req.params;
  try {
    const [data] = await consulModel.checkConsul(idConsul);

    if (data.length == 0)
      return res
        .status(400)
        .json({ message: 'Consultation not found', data: null });

    next();
  } catch (error) {
    res.status(400).json({ message: 'Something went wronggg' });
  }
};

const getAllConsulList = async (req, res) => {
  try {
    const [data] = await consulModel.getAllConsulList();
    res.json({
      message: 'Get all consul list success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const getConsulDetailById = async (req, res) => {
  const { idConsul } = req.params;

  try {
    const [data] = await consulModel.getConsulDetailById(idConsul);
    res.json({
      message: 'Get consultation detail by Id Success',
      data: {
        id: idConsul,
        data,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const addConsulRequest = async (req, res) => {
  const { body } = req;

  try {
    await consulModel.addConsulRequest(body);
    res.status(201).json({
      message: 'Add new consultation request success',
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

module.exports = {
  consulValidator,
  getAllConsulList,
  getConsulDetailById,
  addConsulRequest,
};
