import React, { useState } from "react";
import style from "./style.module.css";
import Files from "react-files";
import CSVReader from "react-csv-reader";
import { Button } from "@mui/material";
import DraggableDialog from "./Dialoge";

export default function FileUploadz() {
  const [file, setfile] = useState("");
  const [Data, setData] = useState([]);
  const [open, setopen] = useState(false)
  const [response, setresponse] = useState({
    
  })

  const handleForce = (data, fileInfo) => {
    setfile(fileInfo);
    setData(data);
    console.log("data", Data);
  };
 
  const handleSubmit=()=>{
    setresponse({
      TotalLength:Data?.length
    })
    setopen(true)



  }
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
      <DraggableDialog  setOpen={setopen} open={open} response={response}/>

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
