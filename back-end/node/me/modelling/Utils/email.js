const nodemailer = require('nodemailer');

const sendMail = async (options) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        secure: false, 
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });
    const sendOptions = {
        from: `sultan <admin@gmail.com>`,
        to: options.email,
        subject: options.subject,
        text: options.message,
    } 
    await transporter.sendMail(sendOptions)
} 

module.exports = sendMail