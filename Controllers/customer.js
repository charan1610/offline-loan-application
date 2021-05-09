// import models file
var customer_model = require('../Models/customer');

// import /Utils/universalFunctions.
var universal_Fun = require('../Utils/universalFunctions');

module.exports = {

    // add customer logic.

    addcustomer: function (data, cb) {

        console.log("controller/customer:Inside'addcustomer'functionality.");

        universal_Fun.save_data_in_DB(customer_model, data, function (err, res) {
            if (err) {
                cb(err, null);
            } else {
                cb(null, res);
            }
        })
    },

    // logic on customer list

    customer_list: function (data, cb) {

        console.log("controller/customer:Inside'customerlist'functionality.");

        universal_Fun.find_data_in_DB(customer_model, data, function (err, res) {
            if (err) {
                cb(err, null);
            } else {
                cb(null, res);
            }
        })
    },

    // logic on update_customer.
    update_customer: function (data, cb) {

        console.log("controller/customer:Inside'update/customer'functionality.");

        universal_Fun.findOneAndUpdate_data_in_DB(customer_model, data, function (err, res) {
            if (err) {
                cb(err, null);
            } else {
                cb(null, res);
            }
        })
    },

    // logic on delete_customer.
    delete_customer: function (data, cb) {

        console.log("controller/customer:Inside'delete/customer'functionality.");

        universal_Fun.delete_data_in_DB(customer_model, data, function (err, res) {
            if (err) {
                cb(err, null);
            } else {
                cb(null, res);
            }
        })
    }
}