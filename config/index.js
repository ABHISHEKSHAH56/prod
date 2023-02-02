
const nodemailer = require('nodemailer');

export const PROMPT=`write an email using [key word]`

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