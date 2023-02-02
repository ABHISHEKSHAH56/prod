
const nodemailer = require('nodemailer');


//const test=await nodemailer.createTestAccount()
export const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: process.env.FROM_EMAIL,
        pass: process.env.FROM_PASS
    }
});