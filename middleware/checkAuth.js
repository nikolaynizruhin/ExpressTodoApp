module.exports = function(req, res, next) {
  if (!req.session.user) {
    var err = new Error('Unauthorized');
    err.status = 401;
    return next(err);
  }
  next();
};