var express = require('express'),
	config = require('./server/configure'),
	cors = require('cors'),
	//https = require('https'),
	//fs = require('fs'),
	app = express(),
	mongoose = require('mongoose');

mongoose.connect('mongodb://nodeapiengine:1q2w0o9i@ds061611.mongolab.com:61611/api_test_db');
mongoose.connection.on('open',function() {
	console.log('Mongoose connected.');
});

/*var options = {
	key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
  	cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
};
*/
app.use(cors());
app.set('port', process.env.PORT || 3300);
app.set('views', __dirname + '/views');
app = config(app);

var server = app.listen(app.get('port'),function() {
	console.log('server up: http://localhost:' + app.get('port'));
});

/*var httpsServer = https.createServer(options, app).listen(433, function() {
	console.log('server up: https"//localhost:' + 433);
});*/
