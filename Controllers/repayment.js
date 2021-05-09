// import models repayment file.
var repayment_models = require('../Models/repayment');

// import /Utils/universalFunctions.
var universalFunc = require('../Utils/universalFunctions');

// repayment API logic
module.exports = {

    // logic on  adding_repayment_customer.

    add_repayment_customer: function (data, cb) {

        console.log("controller/repayment:Inside'add_repayment_customer'functionality.")

        universalFunc.save_data_in_DB(repayment_models, data, function (err, res) {
            if (err) {
                cb(err, null);
            } else {
                cb(null, res);
            }
        })

    },

    // logic on repayment_customers_list

    repayment_customers_list: function (data, cb) {

        console.log("controller/repayment:Inside'repayment_customer_list'functionality.")

        universalFunc.find_data_in_DB(repayment_models, data, function (err, res) {
            if (err) {
                cb(err, null);
            } else {
                cb(null, res);
            }
        })
    },

    // logic on  update_repayment_customer

    update_repayment_customer: function (data, cb) {

        console.log("controller/repayment:Inside'update_repayment_customer'functionality.")

        universalFunc.findOneAndUpdate_data_in_DB(repayment_models, data, function (err, res) {
            if (err) {
                cb(err, null);
            } else {
                cb(null, res);
            }
        })
    },

    // logic on   delete_repayment_customer.

    delete_repayment_customer: function (data, cb) {

        console.log("controller/repayment:Inside'delete_repayment_customer'functionality.")
        
        universalFunc.delete_data_in_DB(repayment_models, data, function (err, res) {
            if (err) {
                cb(err, null);
            } else {
                cb(null, res);
            }
        })
    }
}