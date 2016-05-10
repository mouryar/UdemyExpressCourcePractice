var express = require('express');
var passport = require('passport');
var parser = require('body-parser');

var expressApp = express();
var urlencoderParser = parser.json();


var PORT = process.env.PORT || 3000;

expressApp.use('/assets',express.static(__dirname+'/Static_Files'));

expressApp.use('/',function(req,res,next){
  console.log(req.url);
  next();
})

expressApp.set('view engine','ejs');

expressApp.get('/', function(req, res){
   res.render('index');
});

expressApp.post('/login', urlencoderParser, function (req, res) {
  res.send("Thank you");
if(req.body)
{
  console.log(req.body.firstName);
  console.log(req.body.lastName);
}
});

expressApp.get('/person/:id',function(req, res){
   res.render('person',{ID: req.params.id, qstr: req.query.qstr});

});

expressApp.get('/api',function(req, res){
   res.json({fistName: 'Mourya', lastName: 'Rajala'});

});

expressApp.get('/api/:id',function(req, res){
   res.json({fistName: 'Mourya', lastName: 'Rajala', id:req.params.id});

});


expressApp.listen(PORT);
