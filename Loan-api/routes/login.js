var express = require('express');
var router = express.Router();

const loginModels = require('../Models/UsersLogin.model')

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
