const nodemailer = require("nodemailer");
const { to, TE } = require('../global_functions');
const sendEmail = async function (mailConfiguration, mailData) {
  let err, response;
  var smtpTransport = nodemailer.createTransport({
    service: mailConfiguration.serviceProvider,
    host: mailConfiguration.smtpServer,
    port: mailConfiguration.port,
    auth: {
      user: mailConfiguration.email,
      pass: mailConfiguration.password,
    }
  });
  var mailOptions = {
    from: mailConfiguration.name + ' ' + '<' + mailData.from + '>',
    to: mailData.to,
    subject: mailData.subject,
    html: mailData.html,
  };
  console.log('are your sturucl');
  console.log(mailOptions)
  console.log(mailConfiguration)
  console.log(smtpTransport)
  [err, response] = await to(smtpTransport.sendMail(mailOptions));
  console.log('error in mail', err, mailOptions.to);
  if (err) TE(err.message);
  return response;
}
module.exports.sendEmail = sendEmail;