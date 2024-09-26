const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
    service
    : 'gmail',
    auth: {
        user : 'mgowthamraj9491@gmail.com',
        pass : "qertnteritvjtlia"
    }
});

exports.transporter = transporter;