var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'theprojecez@gmail.com',
        pass: 'lakhtarejelakhvuhoi'
    }
});

var mailOptions = {
    from: 'theprojecez@gmail.com',
    to: '',
    subject: '',
    text: ``
};

const mail = (to, subject, text) => {
    mailOptions.to = to;
    mailOptions.subject = subject;
    mailOptions.text = text;
    transporter.sendMail(mailOptions, (err, info) => {
        if(err) console.log(err);
        else console.log('Email sent successfully');
    })
}

mail('19bce263@nirmauni.ac.in', 'Verification mail', 'URL');
