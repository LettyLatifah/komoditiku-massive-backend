require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { emailCheck, registerUser, loginUser } = require('../models/auth');

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
    const [checkUser] = await emailCheck(email);

    if (checkUser.length !== 0)
      return res.status(400).json({ message: 'User already exist' });

    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);

    await registerUser(email, hash);

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
    const [checkUser] = await loginUser(email);

    passwordcheck = checkUser.password;
    // console.log(checkUser);

    if (checkUser === undefined)
      return res.status(400).json({ message: 'Invalid User!' });

    const isMatch = await bcrypt.compare(password, checkUser[0].password);

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
