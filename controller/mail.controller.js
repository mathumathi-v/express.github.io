// const { request } = require('../app');
const { to, ReS, ReE } = require('../global_functions');
const mailService = require('../services/mail.service');

const sendCustomerMail = async function (req, res) {
  console.log(req.body)
  const mailConfiguration = {

    serviceProvider: 'gmail',
    smtpServer: 'smtp.gmail.com',
    port: '465',
    email: 'hhpapsystem@gmail.com', // Due to ionos configuration, check with centizen mail
    password: 'ejosvwyuecfowbjl', // Due to ionos configuration, check with centizen password
    name: 'PRASANTH S' // mail sender name
  };

  var maillist = ['prasanth312002@gmail.com', req.body.heartEmail]

  const mailData = {
    to: maillist, // TO mail id
    from: 'hhpapsystem@gmail.com', // From mail id
    subject: 'Response From HHPAP System',
    html: `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!-- <title>Document</title> -->
      <style>
    .container {

      margin: 40px;
      padding: 40px;
      background-color: #012F66;
    }

    .nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-left: 20px;
    }

    .background {
      margin-left: 70px;
    }

    .container h1,
    h2 {
      width: 90%;
      text-align: center;
      margin-left: 30px;
      color: #fff;
    }

    .container p {
      text-align: center;
      color: #fff;
    }

    .userDetails {
      margin: 30px;
      background-color: #0260D0;
      border-radius: 10px;
      box-shadow: 0px 0px 5px #000;
      padding: 20px;
      color: #fff;
    }

    .userDetails span {
      font-weight: 400;
    }

    .details {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .userDetails h2 {
      position: relative;
      left: -15px;
      color: #000;
      text-shadow: 0px 0px 2px #000;
      text-decoration: underline;

    }

    h4 {
      width: 290px;
    }
  </style>
    </head>
    
    <body>
      <div class="container">
        <nav class="nav">
          <img src="https://raw.githubusercontent.com/Prasanth-122/EHMS/main/zimage%201.png" width="50px" height="45px">
          <p>Call Now Free: 123-456-7780</p>
        </nav>
        <div class="background">
          <img src="https://dg1xqmhtoint1.cloudfront.net/img/ihs/blog/q3.webp?mtime=20220610181052&focal=none" width="90%" height="20%">
        </div>
        <h1>ESTIMATION OF HUMAN HEALTH PARAMETER AND PREVENTION SYSTEM IN PUBLIC PLACES</h1>
        <h2>FREE MEDICAL SERVICE</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, at. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ratione, nesciunt.</p>
        <div class="details">
          <div class="userDetails">
            <h2>User Details</h2>
            <h4>Name: <span>${req.body.name}</span></h4>
            <h4>Age: <span>${req.body.age}</span></h4>
            <h4>Mobile No.: <span>${req.body.mobileNumber}</span></h4>
            <h4>Gender: <span>${req.body.gender}</span></h4>
            <h4>Address: <span>${req.body.address}</span></h4>
          </div>
          <div class="userDetails userDetails1">
            <h2>Consulting Details</h2>
            <h4>Hospital Name: <span>${req.body.hospital}</span></h4>
            <h4>Doctor Name: <span>${req.body.doctor}</span></h4>
            <h4>Time: <span>${req.body.time}</span></h4>
            <h4>Mode: <span>${req.body.slectionMode}</span></h4>
          </div>
        </div>
      </div>
    </body>
    
    </html>` // Mail content
  }
  // maillist.forEach(function (to, i, array) {
  //   msg.to = to;

  //   smtpTransport.sendMail(msg, function (err) {
  //     if (err) {
  //       console.log('Sending to ' + to + ' failed: ' + err);
  //       return;
  //     } else {
  //       console.log('Sent to ' + to);
  //     }

  //     if (i === maillist.length - 1) { msg.transport.close(); }
  //   });
  // });
  let [err, mailSend] = await to(mailService.sendEmail(mailConfiguration, mailData));
  console.log('mail sender ', mailData.to);
  if (err) return ReE(res, err, 422);
  if (mailSend) return ReS(res, { mailSend: 'success' }, 200);
}
module.exports.sendCustomerMail = sendCustomerMail;