let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'romil.techcompose@gmail.com',
        pass: 'techcompose12*'
    }
});

let mailOptions = {
    from: 'romil.techcompose@gmail.com',
    to: 'kunalvagh45@gmail.com',
    subject: 'sending test email',
    text: 'for testing only....'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log('Email sent : ' + info.response);
    }
});