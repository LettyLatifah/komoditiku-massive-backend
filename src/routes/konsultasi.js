const express = require('express');
const routes = express();
const {
  consulValidator,
  getAllConsulList,
  getConsulDetailById,
  addConsulRequest,
} = require('../controller/konsultasi');

//Read All Consultation List
routes.get('/consul', getAllConsulList);
routes.get('/consul/:idConsul', [consulValidator, getConsulDetailById]);
routes.post('/consul/', addConsulRequest);

module.exports = routes;
