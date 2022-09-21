const express = require('express');
const workOutController = require("../controllers/workOut.js");

const router = express.Router();




router.post('/', workOutController.getExercises, (req, res) => {
  res.status(200).json(res.locals.stretches)
})


module.exports = router;