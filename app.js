require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { createServer } = require('http');
const usersRoutes = require('./routes/users.js');
const middlrewareLogRequest = require('./middleware/logs');
const mysql = require('mysql2');

// inisialisasi variabel
const PORT = process.env.PORT || 4000;
const app = express();
const server = createServer(app);

app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());

app.use(middlrewareLogRequest);

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  res.send('Komoditiku');
});

app.listen(PORT, () => {
  console.log(`Server has been running in http://localhost:${PORT} `);
});
