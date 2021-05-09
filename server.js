// require modules

var express = require('express');

var bodyparser = require('body-parser');

var mongoose = require('mongoose')

// import routes/customer
var customer_routes = require('./Routes/customer');

// import routes/loan
var loan_routes = require('./Routes/loan');

// import repayment_routes
var reapayment_routes = require('./Routes/repayment')

// import config_port
var appconfig = require('./Configs/portconfigs');

//  importsconfig_db
var DBconfig = require('./Configs/dbconfig');

// expree application
var app = express();

// body-parser application.json()
app.use(bodyparser.json());

// customer routes application calling.
customer_routes(app);

// loan routes apllication
loan_routes(app);

// repayment_routes application
reapayment_routes(app);

// server start
app.listen(appconfig.port);

console.log("loanapp is running sucessful");

// DB connection
mongoose.connect(DBconfig.mongo_con_str, DBconfig.url_obj, function (err, res) {
    if (err) {
        console.log("db connection is fail");
    } else {
        console.log("DB connection is sucessful");
    }
})

