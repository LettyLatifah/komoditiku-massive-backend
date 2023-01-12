require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const middlrewareLogRequest = require('./middleware/logs');
const usersRoutes = require('./routes/users.js');
const productRoutes = require('./routes/product.js');
const consulRoutes = require('./routes/konsultasi');
const articleRoutes = require('./routes/artikel');
const courseRoutes = require('./routes/kursus_online');

// inisialisasi awal variabel
const PORT = process.env.PORT || 4000;
const app = express();

// body parser untuk result json
app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }));

//menampilkan running path pada console
app.use(middlrewareLogRequest);

//memanggil api
app.get('/', (_, res) => {
  res.send('Komoditiku');
});
app.use('/users', usersRoutes);
app.use('/product', productRoutes);
app.use('/consul', consulRoutes);
app.use('/article', articleRoutes);
app.use('/course', courseRoutes);

//handling error
app.use((err, req, res, next) => {
  res.status(400).json({
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server has been running in http://localhost:${PORT} `);
});
