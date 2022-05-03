const nodemailer = require('nodemailer');

function sendMail(to, subject, text) {


    const transpoter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: false,
        auth: {
            user: 'romilranatest0011@gmail.com',
            pass: 'Romil@0811'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const mailOptions = {
        from: 'romilranatest0011@gmail.com',
        to: to,
        cc: 'sahilsu1998@gmail.com',
        subject: subject,
        text: text
    };

    transpoter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent : ' + info.response)
        }
    });

}

module.exports = {
    sendMail
}