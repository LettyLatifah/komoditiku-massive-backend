const consulModel = require('../models/konsultasi');

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

const getConsulDetailById = () => {};

const addConsulRequest = () => {};

module.exports = {
  getAllConsulList,
  getConsulDetailById,
  addConsulRequest,
};
