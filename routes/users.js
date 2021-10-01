var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/trivia',{useNewUrlParser:true},{useUnifiedTopology:true});

var userSchema = mongoose.Schema({
  name:String
})


module.exports = mongoose.model('users',userSchema);