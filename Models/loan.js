// require mongoose module
var mongoose = require('mongoose');

// we assign Schema
var Schema = mongoose.Schema;

// we using new keyword
var loan_Schema = new Schema({
	loanType: { type: String, },	// 3-Months, 6-Months, 12-Months
	amount: { type: String, unique: true },
	customerId: { type: Schema.Types.ObjectId, ref: `customers` },
	payment_mode: { type: String }, // Week, Month, Year
	release_date: { type: Date, default: Date.now() }
})

// require model
var loan_customer = mongoose.model('loan_customer', loan_Schema);

// export model/loan.
module.exports = loan_customer;