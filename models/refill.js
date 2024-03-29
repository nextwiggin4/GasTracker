var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var RefillSchema = new Schema({
	userName_id: 	{ type: ObjectId },
	gasStation: 	{ type: String, 'default':'Not Named' },
	pricePerGallon:	{ type: Number, 'default' : 0 },
	totalGallons:	{ type: Number, 'default' : 0 },
	totalPrice:		{ type: Number, 'default' : 0 },
	milage:			{ type: Number, 'default' : 0 },
	trip:			{ type: Number, 'default' : 0 },
	timestamp: 		{ type: Date, 'default': Date.now },
	completeFill:	{ type: Boolean, 'default' : false}			
});

module.exports = mongoose.model('Refill', RefillSchema);