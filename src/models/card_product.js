const db = require('../config/database');

const checkProduct = (idCard) => {
  const sqlQuery = `SELECT id FROM product WHERE id =${idCard}`;
  return db.execute(sqlQuery);
};

const getCardProduct = () => {
  const sqlQuery = 'SELECT * FROM card_product';
  return db.execute(sqlQuery);
};

//${body.foto_produk},
const createCardProduct = (body) => {
  const sqlQuery = `INSERT INTO card_product 
                    (
                    foto_produk,
                    nama_produk, 
                    harga, 
                    kategori,  
                    jumlah_ulasan, 
                    pelaku_umkm, 
                    asal_produk) 
  
  VALUES (
          '${body.foto_produk}',
          '${body.nama_produk}',
          '${body.harga}', 
          '${body.kategori}', 
          '${body.jumlah_ulasan}',
          '${body.pelaku_umkm}', 
          '${body.asal_produk}')`;

  return db.execute(sqlQuery);
};

const updateCard = async (body, idCard) => {
  const sqlQUery = `UPDATE card_product SET 
                    foto_produk='${body.foto_produk}',
                    nama_produk='${body.nama_produk}',
                    harga='${body.harga}', 
                    kategori= '${body.kategori}', 
                    jumlah_ulasan='${body.jumlah_ulasan}',
                    pelaku_umkm=  '${body.pelaku_umkm}', 
                    asal_produk= '${body.asal_produk}'
                    WHERE id=${idCard}
  `;

  return db.execute(sqlQUery);
};

const deleteCard = async (idCard) => {
  const sqlQuery = `DELETE FROM card_product WHERE id=${idCard}`;

  return db.execute(sqlQuery);
};

module.exports = {
  checkProduct,
  getCardProduct,
  createCardProduct,
  updateCard,
  deleteCard,
};
