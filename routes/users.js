var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {

    User.authorize('Nikolay', 'stuDIO1', function(err, user) {
      if (err) {
        next(err);
      } else {
        console.log(user);
      }
    });

});

module.exports = router;
