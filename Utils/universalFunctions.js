
module.exports = {

    // add customers data.

    save_data_in_DB: function (modelname, data, cb) {
        modelname(data).save(function (err, res) {
            if (err) {
                cb(err, null);
            } else {
                cb(null, res);
            }
        })
    },

    // list customer data.

    find_data_in_DB: function (modelname, data, cb) {
        var queryobj={};
        (data._id)?queryobj._id=data._id:null;
        modelname.find(queryobj, function (err, res) {
            if (err) {
                cb(err, null);
            } else {
                cb(null, res);
            }
        })
    },

    // update customer data.

    findOneAndUpdate_data_in_DB: function (modelname, data, cb) {

        var obj = {
            _id: data._id
        }

        var updateobj = {};
        
        (data.occupation) ? updateobj.occupation = data.occupation : null;
        (data.email) ? updateobj.email = data.email : null;
        (data.address) ? updateobj.address = data.address : null;
        (data.mobile_num) ? updateobj.mobile_num = data.mobile_num : null;
        (data.age)?updateobj.age=data.age:null;
        (data.amount) ? updateobj.amount = data.amount : null;
        (data.payment_mode) ? updateobj.payment_mode = data.payment_mode : null;
        (data.re_payment_amount) ? updateobj.re_payment_amount = data.re_payment_amount : null;
        console.log("--------updateobj__list", updateobj);

        modelname.findOneAndUpdate(obj, updateobj, function (err, res) {
            if (err) {
                cb(err, null);
            } else {
                cb(null, res);
            }
        })
    },

    // delete customerdata.
    
    delete_data_in_DB: function (modelname, data, cb) {
        var obj = {
            _id: data._id
        }
        modelname.deleteOne(obj, function (err, res) {
            if (err) {
                cb(err);
            } else {
                cb(res);
            }
        })

    }
}