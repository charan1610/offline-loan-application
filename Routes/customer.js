//import controllers. 
var import_cust_controllers = require('../Controllers/customer');

// require joi module.
const Joi = require('joi');

// import req_data_validation file
var req_validataion_data = require('../Utils/req_data_validator');

module.exports = function (app) {

    // post API & add customer

    app.post('/add/customer', function (req, res) {
        // const reqDataValidator = Joi.object().keys({
        //     firstName: Joi.string().required().min(3).max(5),
        //     lastName: Joi.string().required(),
        //     age: Joi.string().required(),
        //     gender: Joi.string().required().valid("male", "female", "others"),
        //     address: Joi.string().required(),
        //     mobile_num: Joi.string().required(),
        //     email: Joi.string().required(),
        //     occupation: Joi.string().required()
        // });

        const { error } = req_validataion_data.customer_require_validator_data_add.validate(req.body);
        if (error) return res.send(error.details[0].message);

        console.log("routes/customer:Inside'addcustomer'functionality");
        import_cust_controllers.addcustomer(req.body, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
    });

    // get API&customer list

    app.get('/customer/list', function (req, res) {

        // joi req_validation_list data.

        console.log("-------/customer/list-----", req.query);

        const { error } = req_validataion_data.customer_require_validator_data_To_list.validate({});
        if (error) return res.send(error.details[0].message);

        console.log("routes/customer:Inside'customer/list'functionality.");
        import_cust_controllers.customer_list(req.query, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
    });

    // update API customer

    app.put('/update/customer', function (req, res) {

        // const reqvalidator = Joi.object().keys({
        //     _id: Joi.string().required(),
        //     email: Joi.string().required(),
        //     age: Joi.string().required()
        // });

        const { error } = req_validataion_data.customer_require_validator_data_To_update.validate(req.body);
        if (error) return res.send(error.details[0].message);

        console.log("routes/customer:Inside'update/customer'functionality.");
        import_cust_controllers.update_customer(req.body, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
    })

    // delete API customer
    app.delete('/delete/customer', function (req, res) {

        // const req_validator = Joi.object().keys({
        //     _id: Joi.string().required()
        // });
        
        const { error } = req_validataion_data.customer_require_validator_data_To_delete.validate(req.body);
        if (error) return res.send(error.details[0].message);

        console.log("routes/customer:Inside'delete/customer'functionality.");
        import_cust_controllers.delete_customer(req.body, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
    })
}