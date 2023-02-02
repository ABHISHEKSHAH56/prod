
const nodemailer = require('nodemailer');


//const test=await nodemailer.createTestAccount()
export const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'zoey.von14@ethereal.email',
        pass: 'vVdbpyJcRTcFEXADpy'
    }
});