const express = require('express');
const UserController = require('../controllers/userController.js');
const router = express.Router();

router.get('/', UserController.getUsers, (req, res) => res.status(200).json(res.locals.getUsers));

router.post('/',UserController.bcrypted, UserController.newUser, (req,res) => res.status(200).json(res.locals.newUser));

module.exports = router;