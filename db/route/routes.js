const express = require('express');
const UserController = require('../controllers/userController.js');
const router = express.Router();

router.get('/', UserController.getUsers, (req, res) => res.status(200));

module.exports = router;