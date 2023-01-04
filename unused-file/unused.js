const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5002;
const db = require('./config');
const response = require('./response');
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Komoditiku');
});

app.get('/db', (req, res) => {
  const sql = 'SELECT * FROM produk';

  db.query(sql, (error, result) => {
    response(200, result, 'Succes to get all data from db', res);
  });
});

app.get('/hello_umkm', (req, res) => {
  // console.log('find produk: ', req.query.pelaku_umkm);
  const sql = 'SELECT nama_produk FROM produk WHERE harga = 12000';
  db.query(sql, (error, result) => {
    response(200, result, 'find product succces', res);
  });
});

app.get('/hello', (req, res) => {
  console.log({ urlParam: req.query });
  res.send('Hello Komoditiku!');
});

app.post('/login', (req, res) => {
  console.log({ requestfromoutside: req.body });
  {
    res.send('Login Berhasil');
  }
});

app.put('/username', (req, res) => {
  console.log({ updateData: req.body });
  res.send('Update Berhasil');
});

app.listen(PORT, () => {
  console.log(`Server has been running in http://localhost:${PORT} `);
});
