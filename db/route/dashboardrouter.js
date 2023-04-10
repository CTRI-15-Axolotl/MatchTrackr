const express = require('express');
const UserController = require('../controllers/userController.js');
const router = express.Router();

router.get('/', UserController.searchPlayer, (req, res) => {

  res.sendStatus(200)
});




module.exports = router;
