const nodemailer = require('nodemailer')
const config = require('./config')

function sendEmail(email, subject, body, callback) {
  // creating a transport used to send emails
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: config.email,
      pass: config.password,
    },
  })

  // email details
  const mailOptions = {
    from: '',
    to: email,
    subject: subject,
    html: body,
  }

  // send email
  transporter.sendMail(mailOptions, function (error, info) {
    callback(error, info)
  })
}

// sendEmail(
//   'amit.kulkarni@sunbeaminfo.com',
//   'test email from app',
//   'this is a second test email.',
//   (error, result) => {
//     console.log(error)
//     console.log(result)
//   }
// )

module.exports = {
  sendEmail,
}
