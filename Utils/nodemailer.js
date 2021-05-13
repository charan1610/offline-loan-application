// require nodemailer module.
var nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');
 
// create transporter.

module.exports = function (receive_List, subject, htmlString, cb) {

  let transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false,
    auth: {
      user: "apikey",
      pass: "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"
    }
  });

  // send mail with defined transport object
  let info = ({
    from:"mahesh.duddukuri@gspann.com", // sender address
    to: receive_List, // list of receivers
    subject: subject, // Subject line
    // text: "Hello charan", // plain text body
    html: htmlString // html body
  });
  transporter.sendMail(info, function (err, res) {
    if (err) {
      cb(err, null)
    } else {
      cb(null, res)
    }
  })


}


