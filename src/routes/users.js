const express = require('express');
const UsersController = require('../controller/users.js');
const router = express.Router();

//Read - GET
router.get('/', UsersController.getAllUsers);

//Create - POST
router.post('/', UsersController.createNewUSers);

//Update - Patch
router.patch('/:idUsers', UsersController.updateUser);

//Delete - delete
router.delete('/:idUsers', UsersController.deleteUser);

module.exports = router;
