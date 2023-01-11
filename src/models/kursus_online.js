const db = require('../config/database');

const getAllCourse = () => {
  const sqlQuery = 'SELECT * FROM online_course';

  return db.execute(sqlQuery);
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
