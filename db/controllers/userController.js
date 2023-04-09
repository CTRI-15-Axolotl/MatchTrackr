const db = require('../model.js');
const bcrypt = require('bcryptjs')

const UserController = {};

UserController.getUsers = (req, res, next) => {
  db.query('SELECT * FROM users').then((result) => {
    res.locals.getUsers = result.rows;
    console.log(result.rows);
    next();
  });
};
///////////////////////////////////////////
//added bcryped middleware.

UserController.bcrypted = (req,res,next) => {
  let {username, password} = req.body
  const SALT = 10;
  bcrypt.hash(password , SALT , (err,val) =>{
    password = val
    res.locals.userInfo = {username,password};
    next();
  });
}



//////////////////////////////////////////////////////////////
//only need username as primary key, remove id since unnecessary
//created a new table under favlist that uses favorite as a foreign key
//for new users



UserController.newUser = (req,res,next) => {
  const queryStr = "INSERT INTO users (username,password) VALUES ($1,$2) RETURNING*";
  let {username, password} = res.locals.userInfo;
  
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