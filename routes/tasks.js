var express = require('express');
var router = express.Router();
var checkAuth = require('../middleware/checkAuth');

/* GET home page. */
router.get('/', checkAuth, function(req, res, next) {
  res.render('tasks', { title: 'Tasks' });
});

module.exports = router;
