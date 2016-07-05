var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

/* POST login page. */
router.post('/', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  User.authorize(username, password, function(err, user) {
    if (err) return next(err);
    req.session.user = user._id;
    res.send({});
  });
});


module.exports = router;
