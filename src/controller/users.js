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

const createNewUSers = async (req, res) => {
  const { body } = req;

  if (!body.email || !body.name || !body.address) {
    return res.status(400).json({
      message: 'You send wrong datas!',
      data: null,
    });
  }

  try {
    await UserModel.createNewUSer(body);
    res.status(201).json({
      message: 'create new users success',
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const updateUser = async (req, res) => {
  const { idUsers } = req.params;
  const { body } = req;

  try {
    await UserModel.updateUser(body, idUsers);
    res.json({
      message: 'Update users success ',
      data: { id: idUsers, ...body },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { idUsers } = req.params;
  try {
    await UserModel.deleteUser(idUsers);
    res.json({
      message: 'delete berhasil',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

module.exports = { getAllUsers, createNewUSers, updateUser, deleteUser };
