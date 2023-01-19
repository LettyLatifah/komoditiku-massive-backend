const express = require('express');
const routes = express();
const { validationAuth, register, login } = require('../controller/auth');

//mendefinisikan nama api
routes.post('/user-register', [validationAuth, register]);
routes.post('/user-login', login);

module.exports = routes;
