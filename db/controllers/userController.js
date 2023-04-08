const db = require('../model.js');

const UserController = {};

UserController.getUsers = (req, res, next) => {
  db.query('SELECT * FROM users').then((result) => {
    console.log(result.rows[0]);
    next();
  });
};

module.exports = UserController;
