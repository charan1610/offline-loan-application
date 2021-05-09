// require mongoose module
var mongoose = require('mongoose');

// we need some schema
var customerSchema = mongoose.Schema({
	fristname: { type: String, unique: true },
	lastname: { type: String },
	age: { type: Number },
	gender: { type: String },
	address: { type: String },
	mobile_num: { type: String },
	email: { type: String, unique: true },
	occupation: { type: String }
});

// require model
var customer = mongoose.model('customer', customerSchema);

// export the model/customer.js
module.exports = customer;
