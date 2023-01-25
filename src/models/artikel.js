const db = require('../config/database');

const checkArticle = (idArticle) => {
  const sqlQuery = `SELECT id FROM artikel WHERE id=${idArticle}`;

  return db.execute(sqlQuery);
};

const getAllArticle = () => {
  const sqlQuery = `SELECT judul_artikel, 
  tanggal_publikasi, 
  foto_artikel,
  penulis, 
  foto_penulis,  
  link_video, 
  konten_artikel FROM artikel INNER JOIN penulis_artikel ON artikel.id_penulis = penulis_artikel.id_penulis;`;

  return db.execute(sqlQuery);
};

const getWriter = () => {
  const sqlQuery = 'SELECT * FROM penulis_artikel';

  return db.execute(sqlQuery);
};

const getArticleById = (idArticle) => {
  const sqlQuery = `SELECT * FROM artikel WHERE id=${idArticle}`;

  return db.execute(sqlQuery);
};

const createNewArticle = (body) => {
  const sqlQuery = `INSERT INTO artikel 
  (judul_artikel, 
  tanggal_publikasi, 
  penulis, 
  foto_artikel,  
  link_video, 
  konten_artikel) 

VALUES ('${body.judul_artikel}',
'${body.tanggal_publikasi}',
'${body.penulis}', 
'${body.foto_artikel}', 
'${body.link_video}', 
'${body.konten_artikel}')`;

  return db.execute(sqlQuery);
};

const createNewWriter = (body) => {
  const sqlQuery = `INSERT INTO penulis_artikel 
  (penulis,
  foto_penulis) 

  VALUES ('${body.penulis}',
  '${body.foto_artikel}')`;

  return db.execute(sqlQuery);
};

const updateArticle = (body, idArticle) => {
  const sqlQuery = `UPDATE artikel SET 
  judul_artikel='${body.judul_artikel}',
  tanggal_publikasi='${body.tanggal_publikasi}',
  penulis='${body.penulis}',
  foto_artikel='${body.foto_artikel}',
  link_video= '${body.link_video}',
  konten_artikel='${body.konten_artikel}' 
  WHERE id=${idArticle}
  `;
  return db.execute(sqlQuery);
};

const deleteArticle = (idArtikel) => {
  const sqlQuery = `DELETE FROM artikel WHERE id=${idArtikel}`;

  return db.execute(sqlQuery);
};

module.exports = {
  checkArticle,
  getAllArticle,
  getWriter,
  getArticleById,
  createNewArticle,
  createNewWriter,
  updateArticle,
  deleteArticle,
};
