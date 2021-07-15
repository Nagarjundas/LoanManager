var express = require('express');
var router = express.Router();

const loginModels = require('../Models/UsersLogin.model')

/* GET users listing. */
router.get('/get', function (req, res) {
  res.send('Got a add request  naga')
});



module.exports = router;
