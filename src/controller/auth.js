require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { emailCheck, registerUser, loginUser } = require('../models/auth');

const validationAuth = async (req, res, next) => {
  const { name, email, password } = req.body;
  
  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Fields is required!' });
    }

    next();
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong' });
  }
};

const register = async (req, res) => {
  const { body } = req;

  try {
    const [checkUserEmail] = await emailCheck(body.email);

    if (checkUserEmail.length !== 0) {
      return res.status(400).json({ 
        message: 'User already exist' 
      });
    }

    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(body.password, salt);

    await registerUser(body.name, body.email, hash);

    res.status(201).json({
      message: 'Register Success',
    });
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "email or password can't be empty" });
  }
  
  try {
    const [checkUser] = await loginUser(email);

    if (checkUser === undefined) {
      return res.status(400).json({ message: 'Invalid User!' });
    }

    const isMatch = await bcrypt.compare(password, checkUser[0].password);

    if (!isMatch)
      return res.status(400).json({ message: 'Invalid email or password!' });

    const data = {
      id: checkUser.id,
      email: checkUser.email,
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
