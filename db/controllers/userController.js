const db = require('../model.js');

const UserController = {};

UserController.getUsers = (req, res, next) => {
  db.query('SELECT * FROM users').then((result) => {
    console.log(result);
    next();
  });
};

module.exports = UserController;
