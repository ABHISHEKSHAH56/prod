
const nodemailer = require('nodemailer');

export const PROMPT=`
Write a professional concise e-mail where targeted to a potential client who's quite influential and 
important person in that company. Tell how sender can help the client, ask for a meet schedule 
if interested. The description of sender's business/services is given by following keyword/description: <Business Description>
The client name and their company name is: <name> from <company name> Client's business is a start up related to <Client Description> 
and sell on three best selling points based on possible issues faced by client in terms of "Business Development". 
Sender is a firm and not an individual. Include a Subject line.
`

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