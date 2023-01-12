const db = require('../config/database');

const getAllConsulList = () => {
  const sqlQuery = 'SELECT * FROM konsultasi';
  return db.execute(sqlQuery);
};

const getConsulDetailById = (idConsul) => {
  const sqlQuery = `SELECT * FROM konsultasi WHERE id=${idConsul}`;
  return db.execute(sqlQuery);
};

const addConsulRequest = (body) => {
  const sqlQuery = `INSERT INTO konsultasi( 
                    nama_lengkap, 
                    no_hp, 
                    email,
                    no_whatsapp,
                    alamat_bisnis, 
                    media_konsultasi,
                    asal_tentang, 
                    gambaran_masalah)
                    
                    VALUES (
                    '${body.nama_lengkap}',
                    '${body.no_hp}',
                    '${body.email}',
                    '${body.no_whatsapp}',
                    '${body.alamat_bisnis}',
                    '${body.media_konsultasi}',
                    '${body.asal_tentang}',
                    '${body.gambaran_masalah}')`;

  return db.execute(sqlQuery);
};

module.exports = { getAllConsulList, getConsulDetailById, addConsulRequest };
