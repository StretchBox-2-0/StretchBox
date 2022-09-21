const express = require('express');
const request = require('request');
const database = require ('./model');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


const workOutRoute = require('./routes/workOut');
const userRoute = require('./routes/user');
// const userRoute = require('./routes/user')

// app.use('/workout', workOutRoute);
app.use('/user', userRoute); 



app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.use('*', (req, res) => {
  res.status(404).send('There are no stretches over here.');
});


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


app.listen(port, function () {
  console.log('App listening on port: ' + port);
});

