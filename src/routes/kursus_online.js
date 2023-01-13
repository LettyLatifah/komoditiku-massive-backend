const express = require('express');
const routes = express();
const {
  getAllCourse,
  getCourseById,
  createNewCourse,
  updateCourseDetail,
  deleteCourse,
} = require('../controller/kursus_online');

//Read All Course List
routes.get('/get-course', getAllCourse);

//read course by id
routes.get('/get-course/idCourse', getCourseById);

//create new course
routes.post('/create-course', createNewCourse);

//update course detail
routes.patch('/update-course', updateCourseDetail);

//delete course
routes.delete('/delete-course/idCourse', deleteCourse);

module.exports = routes;
