const db = require('../model.js');

const UserController = {};

UserController.getUsers = (req, res, next) => {
  db.query('SELECT * FROM users').then((result) => {
    res.locals.getUsers = result.rows;
    console.log(result.rows);
    next();
  });
};
//////////////////////////////////////////////////////////////
//only need username as primary key, remove id since unnecessary
//created a new table under favlist that uses favorite as a foreign key
//for new users

UserController.newUser = (req,res,next) => {
  const queryStr = "INSERT INTO users (username,password) VALUES ($1,$2) RETURNING*";
  const {username, password} = req.body
  db.query(queryStr,[username,password])
  .then((result) => {
    res.locals.newUser = result.rows;
    next();
  })
  .catch((err) => {
    next({
      log: `UserController.newUser: ERROR: ${err} `,
      message: {err : `Error occured in UserController.newUser`}
    })
  });
}


module.exports = UserController;

////////////////////////////////////////////////////////////////