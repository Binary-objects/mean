var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var userSchema  = new Schema({
	username : {type:String, lowercase:true, required:true, unique:true},
	password : {type:String, required:true},
	email 	 : {type:String, lowercase:true, required:true, unique:true}

});



userSchema.pre('save', function(next) {   //pre middleware, do this before save
  var user = this; 
  bcrypt.hash(user.password ,null, null, function(err, hash) {
    // Store hash in your password DB.
		if(err){
			return next(err);
		}
		user.password = hash;
		next();
	});
});


module.exports = mongoose.model("User", userSchema);