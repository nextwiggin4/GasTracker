var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
	userName: 	{ type: String },
	firstName: 	{ type: String, 'default':'nul' },
	lastName: 	{ type: String, 'default':'nul' },
	website: 	{ type: String, 'default':'nul' },
	age: 		{ type: Number, 'default': 0 },
	password:  	{ type: String }
});

UserSchema.virtual('fullName')
	.get(function() {
		return this.firstName + " " + this.lastName;
	});

module.exports = mongoose.model('User', UserSchema);