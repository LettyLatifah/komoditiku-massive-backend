const bcrypt = require('bcrypt');
const { query } = require('../config/database2');
const { queryCheck, registerUser } = require('../models/auth');

const register = async (req, res) => {
  const { email, password } = req.body;
  if (email === undefined)
    return res.status(400).json({ message: 'Email Required!' });
  if (password === undefined)
    return res.status(400).json({ message: 'Password Required!' });

  try {
    const { emailCheck } = body.email;
    const checkUser = await queryCheck(emailCheck);
    // const checkUser = await query(
    //   `SELECT id FROM users WHERE email ='${email}'`
    // );

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

module.exports = { register };
