const express = require('express');
const routes = express();

const {
  umkmValidator,
  getAllPelakuUmkm,
  getPelakuUmkmById,
  createPelakuUmkm,
  updatePelakuUmkm,
  deletePelakuUmkm,
} = require('../controller/pelaku_umkm');

const multer = require('../middleware/multer_umkm');

//read product
routes.get('/pelaku-umkm', getAllPelakuUmkm);

//read umkm by id
routes.get('/pelaku-umkm/:idUmkm', getPelakuUmkmById);

//create pelaku umkm
routes.post('/pelaku-umkm', multer, createPelakuUmkm);

//update umkm
routes.patch('/pelaku-umkm/:idUmkm', multer, [umkmValidator, updatePelakuUmkm]);

//delete produk
routes.delete('/pelaku-umkm/:idUmkm', [umkmValidator, deletePelakuUmkm]);

module.exports = routes;
