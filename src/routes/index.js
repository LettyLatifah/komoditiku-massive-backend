const express = require('express');
const app = express();

//import all routes
const authApi = require('./auth');
const productApi = require('./product');
const articleApi = require('./artikel');
const consulApi = require('./konsultasi');
const courseApi = require('./kursus_online');

const api = '/api/v1';
app.use(api, authApi);
app.use(api, productApi);
app.use(api, articleApi);
app.use(api, consulApi);
app.use(api, courseApi);

module.exports = app;
