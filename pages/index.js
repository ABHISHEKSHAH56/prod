import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import FileUpload from "../compoment/File";
import Keyword from "../compoment/Keyword";
import style from "./../compoment/style.module.css";

export default function App() {
  const [emailKeyword, setemailKeyword] = useState([]);
  const [Result, setResult] = useState("");
  const [showLoader, setshowLoader] = useState(false)

  async function onSubmit(event) {
    event.preventDefault();
    setshowLoader(true)
    setResult("")
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
        setResult("Not Able to get ")
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
      setshowLoader(false)
      setemailKeyword([]);
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }
  return (
    <>
      <div className={style.formboldmainwrapper}>
        <div className={style.formboldformwrapper}>
          <Keyword
            emailKeyword={emailKeyword}
            setemailKeyword={setemailKeyword}
          />
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
            {
              showLoader? <CircularProgress /> :
              <button  className={style.formboldbtn} onClick={onSubmit}>
              Generate Email
            </button>
            }
           
          </div>
          {Result ? (
              <>
                <label
                  className={`${style.formboldformlabel} ${style.formboldformlabel2}`}
                >
                  response
                </label>
                <p>{Result}</p>
              </>
            ) : null}
        </div>
      </div>
    </>
  );
}
