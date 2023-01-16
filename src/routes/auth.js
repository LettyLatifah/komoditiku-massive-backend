const express = require('express');
const routes = express();
const { register, login } = require('../controller/auth');

//mendefinisikan nama api
routes.post('/user-register', register);
routes.get('/user-login', login);

module.exports = routes;
