
var User = require('../models/user');

module.exports = function(router){
	/*route*/
	router.post('/users', function(req, res){
		//res.send('testing user routes');
		var user = new User();
		user.username  = req.body.username;
		user.password  = req.body.password;
		user.email     = req.body.email;

		if(req.body.username == null || req.body.username == '' || req.body.password == '' || req.body.password == null
			|| req.body.email == null || req.body.email == '')
		{
			res.send("Please fill all the details");
		}else{
			user.save(function(err){
				if(err){
				 	res.send(err);
				}else{
					res.send("User Created Successfully");
				}
			});
		}

	});

	return router;
}