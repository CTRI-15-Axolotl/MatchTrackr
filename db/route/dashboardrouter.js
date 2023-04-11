const express = require('express');
const UserController = require('../controllers/userController.js');
const router = express.Router();

router.get('/', UserController.searchPlayer, UserController.getMatches, (req, res) => {

  res.status(200).json(res.locals.getMatches);
});




module.exports = router;
