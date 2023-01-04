const express = require('express');
const route = express();

const { getMain, getDb } = require('../controller/produk');

//HTTP METHODS

route.get('/todos/main', getMain);
route.get('/todos', getDb);

module.exports = route;
