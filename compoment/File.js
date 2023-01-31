import React, { useState } from "react";
import  style from "./style.module.css";
import Files from "react-files";

export default function FileUpload() {
  const [file, setfile] = useState("")
  function onFilesError(files, error) {
    console.log(error);
    console.log("error code " + error.code + ": " + error.message);
  }
  async function onFilesChange(files) {
    console.log(files, "working");
    setfile(files[0]?.name)
    
}
  return (
    <div className= {`${style.mb6} ${style.pt4}`}>
      <label className={`${style.formboldformlabel} ${style.formboldformlabel2}`}>
        Upload File
      </label>

      <div className={`${style.formboldmb5} ${style.formboldfileinput}`}>
        <Files
          onChange={onFilesChange}
          onError={onFilesError}
          accepts={["image/*", ".csv", "audio/*"]}
        
          minFileSize={0}
          
          clickable
        >
          <label htmlFor="file">
            <div>
              <span className={style.formbolddropfile}> Drop files here </span>
              <span className={style.formboldor}> Or </span>
              <span className={style.formboldbrowse}> Browse </span>
            </div>
          </label>
        </Files>
        <p>{file}</p>
      </div>
    </div>
  );
}
