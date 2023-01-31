import React, { useState } from 'react'
import Chips from './Chip'
import style from  './style.module.css'


export default function Keyword({emailKeyword ,setemailKeyword}) {
  
  const [key, setkey] = useState("")
  return (
    <>
    <div class={style.formboldmb5}>
    <label class={ style.formboldformlabel }>
    Enter the key word to generate the email :
    </label>
       
        <div style={{
          display:"flex",
          flexDirection:"row"

        }}>
          {
            emailKeyword.length>0 && emailKeyword.map((item)=><Chips label={item} handleDelete={()=>{}} />)
          }
        </div>
        <div style={{
          display:"flex",
          flexDirection:"row",
          marginTop:"10px"


        }}>
        <input
          type="text"
          name="key"
          id="#email"
          placeholder="Enter your key to generate the email"
          class="formbold-form-input"
          value={key}
          onChange={(e)=>setkey(e.currentTarget.value)}
        />
         <div>
            <button 
              onClick={()=>{
                if(key)
                {
                  setemailKeyword([...emailKeyword,key])
                  setkey("")
                }
              }}
              class="formbold-btn w-full">
              Add Key
            </button>
         </div>
       
        </div>
      </div>
    
    </>
  )
}
