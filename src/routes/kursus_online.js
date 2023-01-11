const express = require('express');
const courseController = require('../controller/kursus_online');
const router = express.Router();

//Read All Course List
router.get('/', courseController.getAllCourse);

//read course by id
router.get('/', courseController.getCourseById);

//create new course
router.post('/', courseController.createNewCourse);

//update course detail
router.patch('/', courseController.updateCourseDetail);

//delete course
router.delete('/', courseController.deleteCourse);

module.exports = router;
