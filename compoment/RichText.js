import React, { useEffect, useState } from 'react'
import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import("react-rte"), { ssr: false });

export default function RichText(props) {
    const [TextValue, setTextValue] = useState()
    useEffect(() => {
      const asyncFn = async () => {
        const module = await import("react-rte")      
        setTextValue(module.createValueFromString(props?.value,'html'))
      }
      asyncFn();
    
      
    
      
    }, [])
    
    const handleChange=(value)=>{
        console.log("handlechange",value)
        setTextValue(value)
        props.setResult(TextValue.toString('html').toString())
        console.log("xxxxxxxx",TextValue.toString("markdown") )
    }
    if (!TextValue) {
      return null;
    }
  return (
    <RichTextEditor
        value={TextValue}
        onChange={handleChange}
      />
  )
}
