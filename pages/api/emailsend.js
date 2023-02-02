import second, { transporter } from '../../config/index'

export default async function (req, res) {  
  
  try {
    const { mailBody,reciever}=req.body
    console.log(mailBody,reciever)
    if(!mailBody) throw new Error("email body is missing ")
    if(!reciever) throw new Error("Recipient missing")
    var response=[["email","status"]]
    //extract subject
    let sub=mailBody.split("}")
    if(sub.length!==2) throw new Error("Subject is missing or format not match ")
    let subleft=sub[0].split("{")
    let restbody=sub[1]
  
    for(let i=0; i<reciever.length; i++){
      
      await HandleRequest(reciever[i],response,restbody,subleft[0])
  
    }
      res.status(200).json({
        response
      })
    
  } catch (error) {
    console.log("error",error.message)
    res.status(404).json(error.message)
    
  }
  }


  async function HandleRequest(item,response,mailBody,subject){
   try {
    const AfterName=mailBody.replace("[Your Name]",item?.name)
    const CompanyNameBody=AfterName.replace("[Your Company Name]",item?.companyname)
    await transporter.sendMail({
      from: process.env.FROM_EMAIL, // sender address
      to: item?.email, // list of receivers
      subject:subject, // Subject line
      html: CompanyNameBody, // plain text body
       // html body
    }).then((res)=>{
      console.log(res)
      response.push([
        item?.email,"SENT DONE"
      ])
    }).catch((err)=>{
      console.log("err",err)
      response.push([
        item?.email,"Some thing went wrong"
      ])
    })
    
   } catch (error) {
    console.log("error",error)
    throw new Error("file missing")
    
   }
   
  }