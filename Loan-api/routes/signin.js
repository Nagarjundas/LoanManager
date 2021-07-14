var express = require('express');
var router = express.Router();

const siginModel = require('../Models/Signin.model')


//post the signin formof the customer
router.post('/signin', function (req, res) {
    res.send('Got a POST request')
  });

//update the exixting customer
  router.put('/add', function (req, res) {
    res.send('Got a POST request')
  });

module.exports = router;
