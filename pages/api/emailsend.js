import second, { transporter } from '../../config/index'

export default async function (req, res) {  
  
  const { mailBody,reciever}=req.body
  console.log(mailBody,reciever)
  var response=[]

  for(let i=0; i<reciever.length; i++){
    
    await HandleRequest(reciever[i],response,mailBody)

  }
    
  
    
    
  console.log("response",response)
   
    res.status(200).json({
      response
    })
  }


  async function HandleRequest(item,response,mailBody){
   try {
    const AfterName=mailBody.replace("[Your Name]",item?.name)
    const CompanyNameBody=AfterName.replace("[Your Company Name]",item?.companyname)
    await transporter.sendMail({
      from: process.env.FROM_EMAIL, // sender address
      to: item?.email, // list of receivers
      subject:"Testing", // Subject line
      html: CompanyNameBody, // plain text body
       // html body
    }).then((res)=>{
      console.log(res)
      response.push({
        [item?.email]:"SENT DONE"
      })
    }).catch((err)=>{
      console.log("err",err)
      response.push({
        [item?.email]:"Some thing went wrong"
      })
    })
    
   } catch (error) {
    console.log("error",error)
    response.push({
      [item?.email]:"Some thing went wrong"
    })
    
   }
   
  }