import React, { useState } from 'react';

export default function TextForm(props) {
  let changeToUpperCase=()=>{
    // console.log("Clicked to Uppercase button");
    let newText=text.toUpperCase();
    setText(newText);
  }

  //Handler to change to lowercase
  let changeToLowerCase=()=>{
    // console.log("Clicked to Uppercase button");
    let newText=text.toLowerCase();
    setText(newText);
  }

  let handleOnChange=(e)=>{
    // console.log("Changed the state");
    setText(e.target.value);
  }
   
  const[text,setText]= useState("Enter the text here");
  return (
    <>
      <div className='container'>
          <h1>{props.heading}</h1>
          <div className="form-group">
             <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8"></textarea>
             <button className='btn btn-primary my-2 mx-1' onClick={changeToUpperCase}>Convert to UpperCase</button>
             <button className='btn btn-primary my-2 mx-1' onClick={changeToLowerCase}>Convert to LowerCase</button>
           </div>
       </div>
       <div className='container my-2'>
         <h2>Your Summary</h2>
         <p className='px-2'>{text.split(" ").length} words and {text.length} letters</p>
          
          <h2>Preview:</h2>
          <p>{text}</p>
       </div>
    </>
  );
}
