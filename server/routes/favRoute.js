const express = require("express");
const router = express.Router();
const favoriteControlller = require('../controllers/favoriteController.js');
const jwtController = require('../controllers/jwtController.js')

router.post('/',jwtController.verify, favoriteControlller.createFavorite, (req, res) => {
  res.sendStatus(200).json('GOOOOOD');
}); 



module.exports = router;
