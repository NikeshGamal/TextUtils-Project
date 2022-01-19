import React, { useState } from 'react';

export default function TextForm(props) {
  let changeToUpperCase=()=>{
    // console.log("Clicked to Uppercase button");
    let newText=text.toUpperCase();
    setText(newText);
  }

  let handleOnChange=(e)=>{
    // console.log("Changed the state");
    setText(e.target.value);
  }
   
  const[text,setText]= useState("Enter the text here");
  return <div className='container'>
      <h1>{props.heading}</h1>
      <div className="form-group">
    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8"></textarea>
    <button className='btn btn-primary' onClick={changeToUpperCase}>Change to UpperCase</button>
  </div>
  </div>;
}
