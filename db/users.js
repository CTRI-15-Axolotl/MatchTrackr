// import express by using import
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const Userrouter = require('./route/routes');
const favrouter = require('./route/fav');
const dashboardrouter = require('./route/dashboardrouter');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
// Allow cross-origin requests from any origin
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use('/login', Userrouter);

app.use('/fav',favrouter);

app.use('/dashboard', dashboardrouter);

// app.get('/', (req,res) => {

//   res.status(200).sendFile(path.resolve(__dirname,'../index.html'));
// })
/**
 * express error handler`
 */



app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
