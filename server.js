var express = require('express');    // import express module 
var app = express();              //invoking express into a variable
var port =  process.env.PORT || 8080; // use any port availabe or use 8080
var morgan = require('morgan');    // HTTP request logger middleware for node.js 
var mongoose = require('mongoose'); //mongodb
var bodyParser = require('body-parser');
var User = require('./app/models/user');


app.use(bodyParser.json()); //for parsing
app.use(bodyParser.urlencoded({extended : true})); //pass json data to url

app.use(morgan('dev'));

mongoose.set('useCreateIndex', true)

mongoose.connect('mongodb://localhost:27017/tutorial',  {useUnifiedTopology: true, useNewUrlParser: true}, function(err){
	if(err){
		console.log("fail to connect to db" + err);
	}else{
		console.log("Connect to Mongo DB");
	}
});

// app.get('/home', function(req, res){
// 	res.send("Hello from home");
// });

app.post('/users', function(req, res){
	//res.send('testing user routes');
	var user = new User();
	user.username  = req.body.username;
	user.password  = req.body.password;
	user.email     = req.body.email;
	user.save();

	res.send("User Created Successfully");

});

app.listen( port, function(){
	console.log("Server is started");
});


app.get('/', function(req, res){
	res.send("Hell world");
}); 
