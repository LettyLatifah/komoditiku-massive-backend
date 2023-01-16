const express = require('express');
const routes = express();
const {
  getAllConsulList,
  getConsulDetailById,
  addConsulRequest,
} = require('../controller/konsultasi');

//Read All Consultation List
routes.get('/consul', getAllConsulList);
routes.get('/consul/:idConsul', getConsulDetailById);
routes.post('/consul/', addConsulRequest);

module.exports = routes;
