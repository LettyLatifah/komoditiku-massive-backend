const courseModel = require('../models/kursus_online');

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
  getAllCourse,
  getCourseById,
  createNewCourse,
  updateCourseDetail,
  deleteCourse,
};
