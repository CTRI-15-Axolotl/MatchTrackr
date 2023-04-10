const express = require('express');
const UserController = require('../controllers/userController.js');
const router = express.Router();

router.get('/searchplayer', UserController.searchPlayer, (req, res) => {
  // console.log(res.locals.searchResult);
  res.status(200).json(res.locals.searchResult);
});

router.post('/searchplayer', UserController.savePlayer, (req, res) => {
  res.locals.savePlayer;
  res.status(200).json(res.locals.searchResult);
});

module.exports = router;
