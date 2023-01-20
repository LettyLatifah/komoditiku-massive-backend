const db = require('../config/database');

const checkProduct = (idProduct) => {
  const sqlQuery = `SELECT id FROM product WHERE id =${idProduct}`;
  return db.execute(sqlQuery);
};

const getAllProduct = () => {
  const sqlQuery = 'SELECT * FROM product';
  return db.execute(sqlQuery);
};

const getProductById = (idProduct) => {
  const sqlQuery = `SELECT * FROM product WHERE id=${idProduct}`;
  return db.execute(sqlQuery);
};

const getProductUmkm = () => {
  const sqlQuery = `SELECT 
  nama_produk, 
  foto_produk,
  jumlah_ulasan, 
  harga, 
  kategori, 
  tanggal_publikasi, 
  tanggal_panen, 
  persediaan, 
  jumlah_dilihat, 
  jumlah_dihubungi, 
  nama_umkm, 
  asal_umkm,
  foto_umkm,
  deskripsi_produk,
  keterangan_produk FROM product INNER JOIN pelaku_umkm ON product.id_umkm = pelaku_umkm.id_umkm;`;

  return db.execute(sqlQuery);
};

//${body.foto_produk},
const createNewProduct = (body) => {
  const sqlQuery = `INSERT INTO product 
                    (nama_produk, 
                    foto_produk,
                    jumlah_ulasan, 
                    harga, 
                    kategori, 
                    tanggal_publikasi, 
                    tanggal_panen, 
                    persediaan, 
                    jumlah_dilihat, 
                    jumlah_dihubungi, 
                    pelaku_umkm, 
                    asal_produk,
                    deskripsi_produk,
                    keterangan_produk) 
  
  VALUES ('${body.nama_produk}',
          '${body.foto_produk}',
          '${body.jumlah_ulasan}',
          '${body.harga}', 
          '${body.kategori}', 
          '${body.tanggal_publikasi}', 
          '${body.tanggal_panen}', 
          '${body.persediaan}', 
          '${body.jumlah_dilihat}', 
          '${body.jumlah_dihubungi}', 
          '${body.pelaku_umkm}', 
          '${body.asal_produk}',
          '${body.deskripsi_produk}',
          '${body.keterangan_produk}')`;

  return db.execute(sqlQuery);
};

const updateProduct = (body, idProduct) => {
  const sqlQuery = `UPDATE product SET 
                    nama_produk='${body.nama_produk}',
                    foto_produk='${body.foto_produk}',
                    jumlah_ulasan='${body.jumlah_ulasan}',
                    harga='${body.harga}',
                    kategori= '${body.kategori}',
                    tanggal_publikasi='${body.tanggal_publikasi}', 
                    tanggal_panen='${body.tanggal_panen}', 
                    persediaan='${body.persediaan}', 
                    jumlah_dilihat ='${body.jumlah_dilihat}', 
                    jumlah_dihubungi='${body.jumlah_dihubungi}',
                    pelaku_umkm='${body.pelaku_umkm}', 
                    asal_produk='${body.asal_produk}',
                    deskripsi_produk='${body.deskripsi_produk}',
                    keterangan_produk='${body.keterangan_produk}'
                    WHERE id=${idProduct}
                    `;
  return db.execute(sqlQuery);
};

const deleteProduct = (idProduct) => {
  const sqlQuery = `DELETE FROM product WHERE id=${idProduct}`;

  return db.execute(sqlQuery);
};

module.exports = {
  checkProduct,
  getAllProduct,
  getProductById,
  getProductUmkm,
  createNewProduct,
  updateProduct,
  deleteProduct,
};
