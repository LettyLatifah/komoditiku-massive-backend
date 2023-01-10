const express = require('express');
const consulController = require('../controller/konsultasi.js');
const router = express.Router();

//Read All Consultation List
router.get('/', consulController.getAllConsulList);
router.get('/:idConsul', consulController.getConsulDetailById);
router.post('/', consulController.addConsulRequest);

module.exports = router;
