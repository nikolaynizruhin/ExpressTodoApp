var express = require('express');
var router = express.Router();
var checkAuth = require('../middleware/checkAuth');
var Task = require('../models/task');

/* POST add task. */
router.post('/', checkAuth, function(req, res, next) {
  var task = new Task({ 
    user_id: req.user._id,
    content: req.body.task
  });

  task.save(function(err) {
    if (err) return next(err);
    res.redirect('/tasks');
  })
});

/* DELETE task. */
router.delete('/', function(req, res, next) {
  var taskId = req.query.taskId;
  Task.findByIdAndRemove(taskId, function(err) {
    if (err) return next(err);
    res.end();
  });
});

module.exports = router;
