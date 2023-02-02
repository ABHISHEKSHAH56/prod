import React, { useState } from "react";
import style from "./style.module.css";
import Files from "react-files";
import CSVReader from "react-csv-reader";
import { Button } from "@mui/material";
import DraggableDialog from "./Dialoge";
import axios from "axios";

export default function FileUploadz({Result}) {
  const [file, setfile] = useState("");
  const [Data, setData] = useState([]);
  const [open, setopen] = useState(false)
  const [showLoader, setshowLoader] = useState(false)
  const [response, setresponse] = useState()
  console.log("Result",typeof Result)
  async function handleSubmit(event) {

    event.preventDefault();
    setopen(true)
    setshowLoader(true)
    SendEmail()
 

    
  }

const SendEmail=async()=>{
    try {

      const emailBody={
        subject:"",
        mailBody:Result,
        reciever:Data
      }
      await axios.post("/api/emailsend",emailBody).then((res)=>{
        console.log(res?.data)
        setresponse(res.data?.response)
        setshowLoader(false)


      }).catch((err)=>{
        setresponse("some thing went wrong ")
        setshowLoader(false)
        console.log("error",err)
      })
      
    } catch (error) {
      
    }
  }
 
  

  const handleForce = (data, fileInfo) => {
    setfile(fileInfo);
    setData(data);
    console.log("data", Data);
  };
 
 
  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_"),
  };
  return (
    <div className={`${style.mb6} ${style.pt4}`}>
      <label
        className={`${style.formboldformlabel} ${style.formboldformlabel2}`}
      >
        Upload File
      </label>
      <div style={{marginTop:"50px"}}>
      <CSVReader
        
        cssClass="react-csv-input"
       
        onFileLoaded={handleForce}
        parserOptions={papaparseOptions}
      />
      </div>
      <DraggableDialog  setOpen={setopen} open={open} response={response} showLoader={showLoader}/>

      <div style={{
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        marginTop:"40px",
        height:"300px"

      }}>
      <button onClick={handleSubmit} className={style.formboldbtn}>
        Send Mail 
      </button>
      </div>
    </div>
  );
}
