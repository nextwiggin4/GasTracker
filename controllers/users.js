var UserModel = require('../models').User;

function getOneDoc(req, res){
	UserModel.findOne({ firstName: { $regex: req.params.user_id} }, 
			function(err, user) {
				if(err) {throw err;}
				if(user) {
					res.json(user);
					console.log("user info accesed for %s", user.fullName);
				} else {
					res.json(500, {error: 'there is no account'});
				}
			});
}

module.exports = {
	index: function(req, res){
		var viewModel ={
        	numberOfUsers: {},
        	users: {}
    	};

    	UserModel.find({}, function(err, users){
	    	if (err) {throw err;}

	    	viewModel.numberOfUsers = users.length;
	    	viewModel.users = users;
	    		res.json(viewModel);

	    });

	},

	newUser: function(req, res) {
		console.log(req.body.userName)
		if(req.body.userName && /*req.body.firstName && req.body.lastName && req.body.website && req.body.age &&*/ req.body.password) {
			UserModel.find({userName: { $regex: req.body.userName } }, function(err, docs) {
				if (docs.length == 0) {

				var newUser = new UserModel(req.body);
					newUser.save(function(err,brandNewUser) {
						if (err) { throw err; }
					res.json(brandNewUser);
					});
					//res.json(brandNewUser);
				} else {
					res.json(500, {error: 'account already exists!'});
				}  
			});
		} else {
			res.json(500, {error: 'There was an error!' });
		}
	},

	getOneUser: function(req, res){
		UserModel.findOne({ userName: /*{ $regex:*/ req.params.user_id/*}*/ }, 
			function(err, user) {
				if(err) {
					throw err;
				} else {

					if (user) {
						res.json(user);
						//console.log("user info accesed for %s", user.fullName);
					} else {
						res.writeHead(404, {'Content-Type' : 'text/plain'});			
						res.end('Not Found');	
					}
				}	
			});
	},

	updateUser: function(req, res) {
		var query = {userName: { $regex: req.params.user_id}};
		var update = new UserModel(req.body).toObject();
		delete update._id;

		UserModel.findOneAndUpdate(query,update, 
			function (err, user) {
				if(err) {throw err;}
				if(user) {
					res.json(user);
				} else {
					res.json(500, {error: 'there is no account'});
				}
		});
	},

	remove: function(req, res) {
		UserModel.findOneAndRemove({ userName: { $regex: req.params.user_id} }, 
			function(err, user) {
				if(err) {throw err;}
				if(user) {
					res.json(user);
				} else {
					res.json(500, {error: 'there is no account'});
				}
			});

	}


};