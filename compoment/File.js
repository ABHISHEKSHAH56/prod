import React, { useState } from "react";
import style from  "./style.module.css";
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
    <div class="mb-6 pt-4">
      <label class="formbold-form-label formbold-form-label-2">
        Upload File
      </label>

      <div class="formbold-mb-5 formbold-file-input">
        <Files
          onChange={onFilesChange}
          onError={onFilesError}
          accepts={["image/*", ".csv", "audio/*"]}
        
          minFileSize={0}
          
          clickable
        >
          <label for="file">
            <div>
              <span class="formbold-drop-file"> Drop files here </span>
              <span class="formbold-or"> Or </span>
              <span class="formbold-browse"> Browse </span>
            </div>
          </label>
        </Files>
        <p>{file}</p>
      </div>
    </div>
  );
}
