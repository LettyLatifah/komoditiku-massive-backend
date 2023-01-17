const courseModel = require('../models/kursus_online');

const courseValidator = async (req, res, next) => {
  const { idCourse } = req.params;

  try {
    const [data] = await courseModel.checkCourse(idCourse);

    if (data.length == 0)
      return res.status(400).json({ message: 'Product not found', data: null });

    next();
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong' });
  }
};

const getAllCourse = async (_, res) => {
  try {
    const [data] = await courseModel.getAllCourse();
    res.json({
      message: 'Get All Course Success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const getCourseById = () => {};

const createNewCourse = () => {};

const updateCourseDetail = () => {};

const deleteCourse = () => {};

module.exports = {
  courseValidator,
  getAllCourse,
  getCourseById,
  createNewCourse,
  updateCourseDetail,
  deleteCourse,
};
