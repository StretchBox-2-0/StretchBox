const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const jwtController = require('../controllers/jwtController.js');


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