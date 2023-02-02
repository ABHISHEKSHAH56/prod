import React, { useEffect, useState } from 'react'
import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import("react-rte"), { ssr: false });

export default function RichText(props) {
    const [TextValue, setTextValue] = useState()
    useEffect(async() => {
      const module = await import("react-rte")
      
      setTextValue(module.createValueFromString(props?.value,'markdown'))
      
    
      
    }, [])
    
    const handleChange=(value)=>{
        console.log("handlechange",value)
        setTextValue(value)
        props.setResult(TextValue.toString('markdown').toString())
        console.log("xxxxxxxx",TextValue.toString("markdown") )
    }
    
  return (
    <RichTextEditor
        value={TextValue}
        onChange={handleChange}
      />
  )
}
