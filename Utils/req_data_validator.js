// require joi module
const Joi = require('joi');

module.exports = {

    // customer joi connection to  customer_require_validator_data_add.

    customer_require_validator_data_add: Joi.object().keys({
        fristname: Joi.string().required().min(3).max(12),
        lastname: Joi.string().required(),
        age: Joi.string().required(),
        gender: Joi.string().required().valid("male", "female", "others"),
        address: Joi.string().required(),
        mobile_num: Joi.string().required(),
        email: Joi.string().required(),
        occupation: Joi.string().required()
    }),

    // customer joi connection to  customer_require_validator_data_To_list.

    customer_require_validator_data_To_list: Joi.object().keys({
        _id: Joi.string().optional()
    }),

    // customer joi connection to customer_require_validator_data_To_update.

    customer_require_validator_data_To_update: Joi.object().keys({
        _id: Joi.string().required(),
        email: Joi.string().required(),
        age: Joi.string().required(),
        address: Joi.string().optional(),
        occupation: Joi.string(),
        mobile_num: Joi.string().required().min(10).max(10)
    }),

    // customer  joi connection to customer_require_validator_data_To_delete.

    customer_require_validator_data_To_delete: Joi.object().keys({
        _id: Joi.string().required()
    }),

    // loan joi connection to  loan_req_validator_to_add.

    loan_req_validator_to_add: Joi.object().keys({
        loanType: Joi.string().required(),
        amount: Joi.string().required(),
        customerId: Joi.string().required(),
        payment_mode: Joi.string().required()
    }),

    // loan joi connection to  loan_req_validator_to_list.

    loan_req_validator_to_list: Joi.object().keys({
        _id: Joi.string().optional()
    }),

    // loan joi connection to  loan_req_validator_to_update. 

    loan_req_validator_to_update: Joi.object().keys({
        _id: Joi.string().required(),
        amount: Joi.string().required(),
        payment_mode: Joi.string()
    }),

    // loan joi connection to loan_req_validator_to_delete.

    loan_req_validator_to_delete: Joi.object().keys({
        _id: Joi.string().required()
    }),

    // repayment joi connection repayment_req_validator_data_to_add.

    repayment_req_validator_data_to_add: Joi.object().keys({
        loanId: Joi.string().required(),
        customerId: Joi.string().required(),
        re_payment_amount: Joi.string().required()
    }),

    // repayment joi connection repayment_req_validator_data_to_list.

    repayment_req_validator_data_to_list: Joi.object().keys({
        _id: Joi.string().optional()
    }),

    // repayment joi connection  repayment_req_validator_data_to_update.

    repayment_req_validator_data_to_update: Joi.object().keys({
        _id: Joi.string().required(),
        re_payment_amount: Joi.string().required()
    }),

    // repayment joi connection repayment_req_validator_data_to_delete.

    repayment_req_validator_data_to_delete: Joi.object().keys({
        _id: Joi.string().required()
    })

}