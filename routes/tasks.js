var express = require('express');
var router = express.Router();
var checkAuth = require('../middleware/checkAuth');
var Task = require('../models/task');

/* GET tasks page. */
router.get('/', checkAuth, function(req, res, next) {
  Task.find({ user_id: req.user._id }, function (err, tasks) {
    if (err) next(err);
    res.render('tasks', { title: 'Tasks', tasks: tasks });
  });
});

module.exports = router;
