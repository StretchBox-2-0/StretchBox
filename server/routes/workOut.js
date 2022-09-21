const express = require('express');

const router = express.Router();



const {
  getExercises
} = require('../controllers/workOut');


router.route('/api/workOut')
  .get(getExercises);



module.exports = router;