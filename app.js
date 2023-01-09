require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { createServer } = require('http');
const usersRoutes = require('./routes/users.js');
const middlrewareLogRequest = require('./middleware/logs');
const mysql = require('mysql2');
const upload = require('./middleware/multer.js');

// inisialisasi variabel
const PORT = process.env.PORT || 4000;
const app = express();
const server = createServer(app);

app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());

app.use(middlrewareLogRequest);
app.use('/assets', express.static('public/images'));
app.use('/users', usersRoutes);
app.get('/', (req, res) => {
  res.send('Komoditiku');
});
app.post('/upload', upload.single('photo'), (req, res) => {
  res.json({
    message: 'Upload success',
  });
});

app.use((err, req, res, next) => {
  res.status(400).json({
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server has been running in http://localhost:${PORT} `);
});
