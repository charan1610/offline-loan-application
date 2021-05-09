// require mongoose module
var mongoose = require('mongoose');

// we assign Schema
var Schema = mongoose.Schema;

// we are using new keyword(or)constructor function.
var repayment_Schema = new Schema({
	loanId: { type: Schema.Types.ObjectId, ref: "loans" },
	customerId: { type: Schema.Types.ObjectId, ref: `customers` },
	re_payment_amount: { type: String },
	date: { type: Date, default: Date.now() }
});

// require model
var repayment_customer = mongoose.model('repayment_customer', repayment_Schema);

// export model/repayment.js file.
module.exports = repayment_customer;