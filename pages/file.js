import React, { useState } from "react";
import FileUpload from "../compoment/File";
import Keyword from "../compoment/Keyword";

export default function App() {
    const [emailKeyword, setemailKeyword] = useState([])
    const [Result, setResult] = useState("")

    async function onSubmit(event) {
        event.preventDefault();
        try {
          const response = await fetch("/api/generate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ keyword: emailKeyword.toString() }),
          });
    
          const data = await response.json();
          if (response.status !== 200) {
            throw data.error || new Error(`Request failed with status ${response.status}`);
          }
    
          setResult(data.result);
          setkey([])
        } catch(error) {
          // Consider implementing your own error handling logic here
          console.error(error);
          alert(error.message);
        }
      }
  return (
    <>
      <div class="formbold-main-wrapper">
        <div class="formbold-form-wrapper">
          <Keyword emailKeyword={emailKeyword} setemailKeyword={setemailKeyword} />
          <FileUpload />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <button class="formbold-btn"  onClick={onSubmit}>
              Generate Email
            </button>
            <p>{Result}</p>
          </div>
        </div>
      </div>
    </>
  );
}
