var express = require('express');
var router = express.Router();

/* POST logout. */
router.post('/', function(req, res, next) {
  req.session.destroy(function(err) {
    if (err) return next(err);
    res.redirect('/');
  });
});

module.exports = router;
