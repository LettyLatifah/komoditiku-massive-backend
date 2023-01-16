require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const middlewareLogRequest = require('./middleware/logs');
const { createServer } = require('http');
const cors = require('cors');
const apiRoutes = require('./routes/index');

// inisialisasi awal variabel
const PORT = process.env.PORT || 4000;
const app = express();
const server = createServer(app);

// body parser untuk result json
app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }));

//menampilkan running path pada console
app.use(middlewareLogRequest);

//memanggil api
app.get('/', (_, res) => {
  res.send('Komoditiku');
});

app.use(cors());
app.use(apiRoutes);

//handling error
app.use((err, req, res, next) => {
  res.status(400).json({
    message: err.message,
  });
});

server.listen(PORT, () => {
  console.log(`Server has been running in http://localhost:${PORT} `);
});
