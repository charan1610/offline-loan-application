// require Joi module.
const Joi = require('joi');

var req_validataion_data = require('../Utils/req_data_validator');

var loan_controller = require('../Controllers/loan');

// loan.js API logic
module.exports = function (app) {

    // loan API on customer add

    app.post('/create/loan', function (req, res) {
        // const req_validator=Joi.object().keys({
        //     loanType:Joi.string().required(),
        //     amount:Joi.string().required(),
        //     customerId:Joi.string().required(),
        //     payment_mode:Joi.string().required()
        // });

        const { error } = req_validataion_data.loan_req_validator_to_add.validate(req.body);
        if (error) return res.send(error.details[0].message);

        console.log("routes/loans:Inside'create/loan'functionality.")

        loan_controller.add_loan_customers(req.body, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
    });

    // API on loan_customer_list.

    app.get('/loan/list', function (req, res) {

        const { error } = req_validataion_data.loan_req_validator_to_list.validate({});
        if (error) return res.send(error.details[0].message)

        console.log("routes/loans:Inside'loan/list'functionality.")

        loan_controller.list_loan_customers(req.query, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
    });

    //API on loan_customer_update.

    app.put('/loan/update', function (req, res) {
        
        // const req_validator=Joi.object().keys({
        //     _id:Joi.string().required(),
        //     amount:Joi.string().required()
        // });

        const { error } = req_validataion_data.loan_req_validator_to_update.validate(req.body);
        if (error) return res.send(error.details[0].message);

        console.log("routes/loans:Inside'loan/update'functionality.")
        loan_controller.update_loan_customers(req.body, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
    });

    // API on loan_customer_delete.

    app.delete('/delete/loan/customer', function (req, res) {

        // const req_validator=Joi.object().keys({
        //     _id:Joi.string().required()
        // })

        const { error } = req_validataion_data.loan_req_validator_to_delete.validate(req.body);
        if (error) return res.send(error.details[0].message);

        console.log("routes/loans:Inside'loan/delete'functionality.")

        loan_controller.delete_loan_customers(req.body, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
    })

}
