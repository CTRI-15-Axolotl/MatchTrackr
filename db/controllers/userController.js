const db = require('../model.js');
const bcrypt = require('bcryptjs');

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

UserController.bcrypted = (req, res, next) => {
  let { username, password } = req.body;
  const SALT = 10;
  bcrypt.hash(password, SALT, (err, val) => {
    password = val;
    res.locals.userInfo = { username, password };
    next();
  });
};

//////////////////////////////////////////////////////////////
//only need username as primary key, remove id since unnecessary
//created a new table under favlist that uses favorite as a foreign key
//for new users

UserController.newUser = (req, res, next) => {
  const queryStr =
    'INSERT INTO users (username,password) VALUES ($1,$2) RETURNING*';
  let { username, password } = res.locals.userInfo;

  db.query(queryStr, [username, password])
    .then((result) => {
      res.locals.newUser = result.rows;
      next();
    })
    .catch((err) => {
      next({
        log: `UserController.newUser: ERROR: ${err} `,
        message: { err: `Error occured in UserController.newUser` },
      });
    });
};

////////////////////////////////////////////////////////////////

UserController.searchPlayer = (req, res, next) => {
  //request = http://localhost:3000/fav/searchplayer?player=secret
  // api requiest = https://api.pandascore.co/valorant/players?search[name]=secret

  // console.log(req.query);
  const searchName = req.query.player;
  // fetch(`https://api.pandascore.co/valorant/players?search[name]=${searchName}&sort=&page=1&per_page=50`)
  fetch(
    `https://api.pandascore.co/valorant/players?search[name]=${searchName}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization:
          'Bearer AjmPdCJGad96FApxvfERKerUl8nODsLA6_AUXpqyCLRuDdCHrm4',
      },
    }
  )
    .then((result) => result.json())
    .then(result => {
      console.log(result)
      res.locals.searchResult = result;
      next();
    })
    .catch((err) => {
      next({
        log: `UserController.searchPlayer: ERROR: ${err} `,
        message: { err: `Error occured in UserController.searchPlayer` },
      });
    });
};

////////////////////////////////////////////////////////////

UserController.savePlayer = (req, res, next) => {
  const fav_user = 1;
  const current_team_acronym = req.body.favorite.current_team.acronym;
  const current_team_id = req.body.favorite.current_team.id;
  const current_team_image_url = req.body.favorite.current_team.image_url;
  const current_team_name = req.body.favorite.current_team.name;
  const { 
    first_name, 
    image_url, 
    last_name, 
    name
   } = req.body.favorite.current_team;

  const queryStr =
    'INSERT INTO favlist (fav_user, current_team_acronym, current_team_id, current_team_image_url, current_team_name, first_name, image_url, last_name, name) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING*';

  db.query(queryStr, [
    fav_user,
    current_team_acronym,
    current_team_id,
    current_team_image_url,
    current_team_name,
    first_name,
    image_url,
    last_name,
    name,
  ])
    .then((result) => {
      res.locals.savePlayer = result.rows;
      next();
    })
    .catch((err) => {
      next({
        log: `UserController.savePlayer: ERROR: ${err} `,
        message: { err: `Error occured in UserController.savePlayer` },
      });
    });
};

// {
//   "age": 18,
//   "birthday": "2004-05-15",
//   "current_team": { // JSONstring of this
//    *  "acronym": "MARU",
//    *  "id": 130206,
//    *  "image_url": "https://cdn.pandascore.co/images/team/image/130206/600px_maru_gaming_allmode.png",
//       "location": "KR",
//       "modified_at": "2023-04-08T15:48:56Z",
//    *  "name": "Maru Gaming",
//       "slug": "maru-gaming"
//   },
//   "current_videogame": {
//       "id": 26,
//       "name": "Valorant",
//       "slug": "valorant"
//   },
//   "first_name": "Kim",
//   "id": 32466,
//   "image_url": "https://cdn.pandascore.co/images/player/image/32466/600px_secret_at_first_strike_korea.png",
//   "last_name": "Ha-jin",
//   "modified_at": "2023-04-06T14:47:10Z",
//   "name": "Secret",
//   "nationality": "KR",
//   "role": null,
//   "slug": "secret-kim-ha-jin"
// }

////////////////////////////////////////////////////////////

UserController.getDashboard = (req, res, next) => {
  const queryStr = 'SELECT * from favlist WHERE fav_user = 1';
  db.query(queryStr)
  .then((result) => result.json())
  .then((result) => {
    res.locals.dashboard = result;
  })
};

///////////////////////////////////////////////////////////

UserController.getMatches = (req,res,next) => {
  fe

}

module.exports = UserController;
