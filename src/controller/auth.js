const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { query } = require('../config/database2');
const { queryCheck } = require('../models/auth');

const register = async (req, res) => {
  const { email, password } = req.body;
  if (email === undefined)
    return res.status(400).json({ message: 'Email Required!' });
  if (password === undefined)
    return res.status(400).json({ message: 'Password Required!' });

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
  try {
    res.send('Hallo');
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong' });
  }
};

module.exports = { register, login };
