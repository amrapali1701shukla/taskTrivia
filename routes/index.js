var express = require('express');
var userModel = require('./users');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/name', function(req, res, next) {
  res.render('name');
});

router.post('/name', function(req, res) {
  userModel.create ({
    name:req.body.name
  }).then(function(user){
    console.log(user.name);
   res.render('quiz',{name:user.name});
  })
});

router.get('/find',function(req,res){
  res.send(req.session);
})
module.exports = router;


