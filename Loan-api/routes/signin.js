var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

const siginModel = require('../Models/Signin.model')


//this is get api for all customer list
router.get('/list', function (req, res, next) {

  siginModel.find(function (err, customerList) {

    if (err) {
      res.send({ status: 500, message: 'sry unable add the customer' })

    }
    else {
      res.send({ status: 200, message: 'customer added successfully', Result: customerList })
    }

  })
  console.log('yes signin is working ')
});


//this is a method to get the single customer
router.get('/customerid', function (req, res) {

  const userId = req.query.userId;
  siginModel.findById(userId, function (err, customer) {

    if (err) {
      res.send({ status: 500, message: 'sry unable add the customer' })

    }
    else {
      res.send({ status: 200, message: 'customer is this', Result: customer })
    }

  })

});



// this is post api
router.post('/add', function (req, res, next) {
  let customerObj = new siginModel({

    firstName: 'naga',
    lastName: 'Das',
    dob: '19/05/1994',
    emailId: 'nagarjun@gmail.com',
    passWord: 'xyzabc',
    phoneeNo: '9853919199',
    Address: 'odisha'

  });

  customerObj.save(function (err, customerObj) {
    if (err) {
      res.send({ status: 500, message: 'sry unable add the customer' })

    }
    else {
      res.send({ status: 200, message: 'customer added successfully', customerDetails: customerObj })
    }
  })
  console.log("yes the post call worked ");


});


//it is used to edit the user 
router.put('/put', function (req, res) {
  const userId = req.query.userId;

  let customerObj =({

    firstName: 'John',
    lastName: 'Duooo',
    dob: '19/05/1494',
    emailId: 'john@gmail.com',
    passWord: 'xyzabc',
    phoneeNo: '9334919199',
    Address: 'USA'

  });

  siginModel.findByIdAndUpdate(userId,customerObj, function(err, customer) {

    if (err) {
      res.send({ status: 500, message: 'sry unable update the customer' })

    }
    else {
      res.send({ status: 200, message: 'customer is this', Result: customer })
    }

  })
});

//delete the user with the id
router.delete('/delete', function (req, res) {
  const userId = req.query.userId;
  siginModel.findByIdAndDelete(userId, function (err, customer) {

    if (err) {
      res.send({ status: 500, message: 'customer deletion is showing error' })

    }
    else {
      res.send({ status: 200, message: 'customer is deleted', Result: customer })
    }

  })
});

module.exports = router;
