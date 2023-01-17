const express = require('express');
const routes = express();
const {
  courseValidator,
  getAllCourse,
  getCourseById,
  createNewCourse,
  updateCourseDetail,
  deleteCourse,
} = require('../controller/kursus_online');

//Read All Course List
routes.get('/course', getAllCourse);

//read course by id
routes.get('/course/:idCourse', [courseValidator, getCourseById]);

//create new course
routes.post('/course', createNewCourse);

//update course detail
routes.patch('/course/:idCourse', [courseValidator, updateCourseDetail]);

//delete course
routes.delete('/course/:idCourse', [courseValidator, deleteCourse]);

module.exports = routes;
