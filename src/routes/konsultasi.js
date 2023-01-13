const express = require('express');
const routes = express();
const {
  getAllConsulList,
  getConsulDetailById,
  addConsulRequest,
} = require('../controller/konsultasi');

//Read All Consultation List
routes.get('/consul', getAllConsulList);
routes.get('/consul-detail/:idConsul', getConsulDetailById);
routes.post('/add-consul/', addConsulRequest);

module.exports = routes;
