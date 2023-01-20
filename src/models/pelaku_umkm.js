const db = require('../config/database');

const checkUmkm = (idUmkm) => {
  const sqlQuery = `SELECT id_umkm FROM pelaku_umkm WHERE id_umkm=${idUmkm}`;

  return db.execute(sqlQuery);
};

const getAllPelakuUmkm = () => {
  const sqlQuery = `SELECT * FROM pelaku_umkm`;

  return db.execute(sqlQuery);
};

const getAllPelakuUmkmById = (idUmkm) => {
  const sqlQuery = `SELECT * FROM pelaku_umkm WHERE id=${idUmkm}`;

  return db.execute(sqlQuery);
};

const createPelakuUmkm = (body) => {
  const sqlQuery = `INSERT INTO pelaku_umkm(
                    nama_umkm,
                    foto_umkm,
                    asal_umkm,
                    email,
                    whatsapp)
  VALUES ('${body.nama_umkm}',
          '${body.foto_umkm}',
          '${body.asal_umkm}',
          '${body.email}',
          '${body.whatsapp}')`;

  return db.execute(sqlQuery);
};

const updatePelakuUmkm = (body, idUmkm) => {
  const sqlQuery = `UPDATE pelaku_umkm SET
                    nama_umkm='${body.nama_umkm}',
                    foto_umkm='${body.foto_umkm}',
                    asal_umkm='${body.asal_umkm}',
                    email='${body.email}',
                    whatsapp='${body.whatsapp}'
                    WHERE id_umkm=${idUmkm}
  `;

  return db.execute(sqlQuery);
};

const deletePelakuUmkm = (idUmkm) => {
  const sqlQuery = `DELETE FROM pelaku_umkm WHERE id_umkm=${idUmkm}`;

  return db.execute(sqlQuery);
};

module.exports = {
  checkUmkm,
  getAllPelakuUmkm,
  createPelakuUmkm,
  getAllPelakuUmkmById,
  updatePelakuUmkm,
  deletePelakuUmkm,
};
