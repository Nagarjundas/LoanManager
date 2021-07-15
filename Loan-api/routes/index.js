var express = require('express');
var router = express.Router();
const loginModels = require('../Models/UsersLogin.model');

/* GET home page. */
router.get('/multiple', function(req, res, next) {

  // example of sending multiple response
  var i = 1,
  max = 5;

//set the appropriate HTTP header
res.setHeader('Content-Type', 'text/html');

//send multiple responses to the client
for (; i <= max; i++) {
  res.write('<h1>This is the response #: ' + i + '</h1>');
}

//end the response process
res.end();

  // res.render('index', { title: 'Express' });
  console.log('yesssssssss ')
});





module.exports = router;
