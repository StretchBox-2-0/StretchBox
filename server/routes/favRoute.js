const express = require("express");
const router = express.Router();
const favoriteControlller = require('../controllers/favoriteController.js');
const jwtController = require('../controllers/jwtController.js')

// create a fav 
router.post('/',jwtController.verify, favoriteControlller.createFavorite, (req, res) => {
  res.status(200).json('GOOOOOD');
}); 

// get all fav 

// delete one request
module.exports = router;

