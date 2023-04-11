const express = require('express');
const UserController = require('../controllers/userController.js');
const router = express.Router();

router.get('/searchplayer', UserController.searchPlayer, (req, res) => {
  console.log('###');
  console.log(res.locals.searchResult);
  res.status(200).json(res.locals.searchResult);
});

router.post('/saveplayer', UserController.savePlayer, (req, res) => {
  res.status(200).json(res.locals.savePlayer);
});

module.exports = router;
