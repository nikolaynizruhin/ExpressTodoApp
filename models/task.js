var mongoose = require('../lib/mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Task', schema);
