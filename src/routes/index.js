const express = require('express');
const app = express();

//import all routes
const productApi = require('./product');
const articleApi = require('./artikel');
const consulApi = require('./konsultasi');
const courseApi = require('./kursus_online');

const api = '/api/v1';
app.use(api, productApi);
app.use(api, articleApi);
app.use(api, consulApi);
app.use(api, courseApi);

module.exports = app;
