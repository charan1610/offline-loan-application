// import /Models/loan file data
var loan_model = require('../Models/loan');

// import /Utils/universalFunctions file data.
var universalFun = require('../Utils/universalFunctions');

// logic on loan.js

module.exports = {

    // logic on add_loan_customer
    add_loan_customers: function (data, cb) {

        console.log("controller/loan:Inside'add_loan_customers'functionality.")

        universalFun.save_data_in_DB(loan_model, data, function (err, res) {
            if (err) {
                cb(err, null);
            } else {
                cb(null, res);
            }
        })
    },

    // logic on list_loan_customers.

    list_loan_customers: function (data, cb) {

        console.log("controller/loan:Inside'list_loan_customers'functionality.")

        universalFun.find_data_in_DB(loan_model, data, function (err, res) {
            if (err) {
                cb(err, null);
            } else {
                cb(null, res);
            }
        })
    },

    // logic on  update_loan_customers

    update_loan_customers: function (data, cb) {

        console.log("controller/loan:Inside'update_loan_customers'functionality.")

        universalFun.findOneAndUpdate_data_in_DB(loan_model, data, function (err, res) {
            if (err) {
                cb(err, null);
            } else {
                cb(null, res);
            }
        })
    },

    // logic on  delete_loan_customers

    delete_loan_customers: function (data, cb) {

        console.log("controller/loan:Inside'delete_loan_customers'functionality.")

        universalFun.delete_data_in_DB(loan_model, data, function (err, res) {
            if (err) {
                cb(err, null);
            } else {
                cb(null, res);
            }
        })
    }
}