const express = require('express');
const router = express.Router();

const lunchController = require('../controllers/lunchController');

router.get('/getfood', 
  lunchController.getLunch,
  (req, res) => {
    res.status(200).json(res.locals);
  }
);