const express = require("express");
const router = express.Router();
const favoriteController = require('../controllers/favoriteController.js');
const jwtController = require('../controllers/jwtController.js')

// create a fav 
router.post('/', jwtController.verify, favoriteController.createFavorite, (req, res) => {
  res.status(200).json('GOOOOOD');
});
//post user/fav/
// get all fav 
router.get('/',jwtController.verify, favoriteController.getFavorite, (req, res) => {
  // send back to frontend
  res.status(200).json(res.locals.favStretches)
})

// delete one request
module.exports = router;

