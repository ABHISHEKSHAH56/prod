import second, { transporter } from '../../config/index'

export default async function (req, res) {

    
    
  
    
    let info = await transporter.sendMail({
      from: 'zoey.von14@ethereal.email', // sender address
      to: "ak8756110@gmail.com", // list of receivers
      subject:"hi", // Subject line
      text: "by", // plain text body
       // html body
    });
  
    console.log("Message sent: %s", info);
    res.status(200).json({
        mesaage:"hi"
    })
  }