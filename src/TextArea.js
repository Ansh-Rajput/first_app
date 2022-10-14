import { useState } from "react"
import React from 'react'

export default function TextArea(props) {
    
  const [text,setText] = useState("")

  const text_to_uppercase = ()=>{
    let new_text = text.toUpperCase();
    setText(new_text);
    props.showAlert("Text converted to upper case.","success")
  }
  const text_to_loarcase = ()=>{
    let new_text = text.toLowerCase();
    setText(new_text);
    props.showAlert("Text converted to lower case.","success")
  }
  const text_trim = ()=>{
    props.showAlert("Text has been formated.","success")
    let new_text = text.trim();
    setText(new_text);
  }
  const Clear_text = ()=>{
    setText("");
  }
  const On_change = (event)=>{
    setText(event.target.value);
  }
  // console.log(text.split(" "));

  return (
    <>
      <div className="mb-3 mx-3 my-2">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h1>Example TextArea</h1>
        </label>
        <textarea
          value = {text}
          onChange={On_change}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={15}

        />
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={text_to_uppercase}>Convert to UpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={text_to_loarcase}>Convert to LoarCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={text_trim}>Remove Extra Space</button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={Clear_text}>Clear Text Area </button>

      <div className="mb-3 mx-3 my-2">
        <h2>Your Text Summary </h2>
        <p>No. of words: {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} | Time to read text: {0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length}min </p>
      </div>
    </>

  )
}
