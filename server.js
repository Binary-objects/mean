
/* packages */

var express = require('express');    // import express module 
var app = express();              //invoking express into a variable
var port =  process.env.PORT || 8080; // use any port availabe or use 8080
var morgan = require('morgan');    // HTTP request logger middleware for node.js 
var mongoose = require('mongoose'); //mongodb
var bodyParser = require('body-parser');
var router   = express.Router(); // defining router
var appRoutes  = require('./app/routes/api')(router);  //router obj
var path = require('path');

/*for static file available on server use middleware express.static */

app.use(express.static(__dirname + './public'));


/*Middleware*/
app.use(morgan('dev'));
app.use(bodyParser.json()); //for parsing
app.use(bodyParser.urlencoded({extended : true})); //pass json data to url
app.use('/api',appRoutes);


/*DataBase*/
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/tutorial',  {useUnifiedTopology: true, useNewUrlParser: true}, function(err) {
	if(err){
		console.log("fail to connect to db" + err);
	}else{
		console.log("Connect to Mongo DB");
	}
});

/*   "*" whatever user enter url send to this page
*/ 
app.get('*', function(req, res){
	res.sendFile(path.join(__dirname+'/public/app/views/index.html'));
}); 

/*server port*/
app.listen( port, function(){
	console.log("Server is started");
});


app.get('/', function(req, res){
	res.send("Hell world");
}); 

