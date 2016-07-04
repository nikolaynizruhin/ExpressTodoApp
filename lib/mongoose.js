var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/newboston');
module.exports = mongoose;