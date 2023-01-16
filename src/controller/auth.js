const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { query } = require('../config/database2');
const { queryCheck } = require('../models/auth');

const validationAuth = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (email === undefined)
      return res.status(400).json({ message: 'Email Required!' });
    if (password === undefined)
      return res.status(400).json({ message: 'Password Required!' });

    next();
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong' });
  }
};

const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkUser = await query(
      `SELECT id FROM users WHERE email ='${email}'`
    );

    if (checkUser.length !== 0)
      return res.status(400).json({ message: 'User already exist' });

    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);

    await query(
      `INSERT INTO users (email, password) VALUES ('${email}', '${hash}');`
    );

    return res.status(201).json({
      message: 'Register Success',
    });
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [checkUser] = await query(
      `SELECT id, email, password FROM users WHERE email = '${email}';`
    );

    if (checkUser === undefined)
      return res.status(400).json({ message: 'Invalid User!' });

    const isMatch = await bcrypt.compare(password, checkUser.password);

    if (!isMatch)
      return res.status(400).json({ message: 'Invalid email or password!' });

    const data = {
      id: checkUser.id,
      username: checkUser.email,
    };

    const token = await jwt.sign(data, process.env.privateKey, {
      expiresIn: '1d',
    });

    return res.status(200).json({ Authorization: `bearer ${token}` });
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong' });
  }
};

module.exports = { validationAuth, register, login };
