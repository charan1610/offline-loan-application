// require Joi module.
const Joi = require('joi');

// import utils/req_data_validator
var req_data_validation = require('../Utils/req_data_validator');

// import controllers/repayment file.
var reayment_controllers = require('../Controllers/repayment');

// repayment API logic.
module.exports = function (app) {

    // API on add_repayment_customer
    app.post('/add/repayment/customer', function (req, res) {

        // const req_validator=Joi.object().keys({
        //     loanId:Joi.string().required(),
        //     customerId:Joi.string().required(),
        //     re_payment_amount:Joi.string().required()
        // })
        const { error } = req_data_validation.repayment_req_validator_data_to_add.validate(req.body);
        if (error) return res.send(error.details[0].message);

        reayment_controllers.add_repayment_customer(req.body, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
    });

    //  API on repayment?customer/list.

    app.get('/repayment/customer/list', function (req, res) {

        const { error } = req_data_validation.repayment_req_validator_data_to_list.validate({});
        if (error) return res.send(error.details[0].message);

        reayment_controllers.repayment_customers_list(req.query, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
    });

    // API on repayment/update/customers.
    app.put('/repayment/update/customers', function (req, res) {

        // const req_validator=Joi.object().keys({
        //     _id:Joi.string().required(),
        //     re_payment_amount:Joi.string().required()
        // })

        const { error } = req_data_validation.repayment_req_validator_data_to_update.validate(req.body);
        if (error) return res.send(error.details[0].message);

        reayment_controllers.update_repayment_customer(req.body, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
    });

    // API ON /repayment/delete/customers.
    app.delete('/repayment/delete/customers', function (req, res) {

        // const req_validator=Joi.object().keys({
        //     _id:Joi.string().required()
        // })
        
        const { error } = req_data_validation.repayment_req_validator_data_to_delete.validate(req.body);
        if (error) return res.send(error.details[0].error);


        reayment_controllers.delete_repayment_customer(req.body, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
    })
}