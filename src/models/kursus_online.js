const db = require('../config/database');

const checkCourse = (idCourse) => {
  const sqlQuery = `SELECT id FROM online_course WHERE id=${idCourse}`;

  return db.execute(sqlQuery);
};

const getAllCourse = () => {
  const sqlQuery = 'SELECT * FROM online_course';

  return db.execute(sqlQuery);
};

const getCourseById = () => {};

const createNewCourse = () => {};

const updateCourseDetail = () => {};

const deleteCourse = () => {};

module.exports = {
  checkCourse,
  getAllCourse,
  getCourseById,
  createNewCourse,
  updateCourseDetail,
  deleteCourse,
};
