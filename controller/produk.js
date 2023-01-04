const db = require('../unused-file/config');

const getMain = (_, res) => {
  return res.status(200).json('Berhasil Menampilkan data');
};

const getDb = (_, res) => {
  const sql = 'SELECT * FROM produk';
  db.query(sql);
};

module.exports = { getMain, getDb };
