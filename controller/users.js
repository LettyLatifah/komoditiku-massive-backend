const UserModel = require('../models/users');

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UserModel.getAllUsers();
    res.json({
      message: 'GET all users success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const createNewUSers = (req, res) => {
  console.log(req.body);
  res.json({
    message: 'Post users success',
    data: req.body,
  });
};

const updateUser = (req, res) => {
  const { idUsers } = req.params;
  console.log('IdUSer:', idUsers);
  res.json({
    message: 'Update users success ',
    data: req.body,
  });
};

const deleteUser = (req, res) => {
  const { idUsers } = req.params;
  res.json({
    message: 'delete berhasil',
    data: {
      id: idUsers,
      name: 'letty',
      email: 'lettylatifah15@gmail.com',
      address: 'banyuasin',
    },
  });
};

module.exports = { getAllUsers, createNewUSers, updateUser, deleteUser };
