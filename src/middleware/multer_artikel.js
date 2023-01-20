const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/article');
  },
  filename: (req, file, cb) => {
    const timestamp = new Date().getTime();
    const originalname = file.originalname;
    cb(null, `${timestamp}-${originalname}`);
  },
});

module.exports = multer({
  storage: storage,
  limits: {
    fileSize: 3 * 1000 * 1000,
  },
}).single('foto_artikel');
