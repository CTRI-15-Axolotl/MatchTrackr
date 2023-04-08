// import express by using import
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const Userrouter = require('./route/routes');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/login', Userrouter);

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
