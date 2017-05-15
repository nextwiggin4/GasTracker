var users = require('../controllers/users'),
	test = require('../controllers/test'),
	refills = require('../controllers/refills');

module.exports.initialize = function(app, router) {
	
	//all the get requests possible. /test returns a test 
	

	router.get('/test', test.index);
	
	//retun an array of JSON objects for all users
	router.get('/users', users.index);
	
	//retrun a list of all refills
	router.get('/refills', refills.index);
	
	//return a JSON object of a single user and inforamtion about their 
	router.get('/users/:user_id/refills', refills.getOneUser);
	

	router.get('/users/:user_id', users.getOneUser);
	
	router.post('/users', users.newUser);
	router.post('/users/:user_id/refills', refills.refill)
	
	router.put('/users/:user_id', users.updateUser);
	
	router.delete('/users/:user_id', users.remove);

	app.use('/', router);
};