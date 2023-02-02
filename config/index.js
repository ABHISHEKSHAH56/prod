
const nodemailer = require('nodemailer');


//const test=await nodemailer.createTestAccount()
export const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'abhishekshah4010@gmail.com',
        pass: 'njrxpzgkmnezxgzk'
    }
});