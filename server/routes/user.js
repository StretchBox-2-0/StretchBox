const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const jwtController = require('../controllers/jwtController.js');
const cors = require('cors');

// let corsOptions = {
//   origin: 'http://localhost:8081/',
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

// app.use(cors(corsOptions));


//  handle login 
// router.post('/login', userController.verifyUser, jwtController.write, (req, res) => {
router.post('/login', userController.verifyUser, (req, res) => {
  res.status(200).json(res.locals.userID);
});

// handle signUp
router.post('/signup', userController.createUser, (req, res) => {
  res.status(200).json(res.locals.userID);
});
// const {
// userControllers here
// } = require('../controllers/userController')




module.exports = router;