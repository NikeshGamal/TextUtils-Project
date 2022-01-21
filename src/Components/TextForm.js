import React, { useState } from 'react';

export default function TextForm(props) {
  let changeToUpperCase=()=>{
    // console.log("Clicked to Uppercase button");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");

  }

  //Handler to change to lowercase
  let changeToLowerCase=()=>{
    // console.log("Clicked to Uppercase button");
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  }

  let handleOnChange=(e)=>{
    // console.log("Changed the state");
    setText(e.target.value);
  }

  let textColor=props.mode==='light'?'dark':'light';
   
  const[text,setText]= useState("");
  return (
    <>
      <div className={`container text-${textColor}`}>
          <h1>{props.heading}</h1>
          <div className="form-group">
             <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#042743':'white',
            color:props.mode==='dark'?'white':'black'}} rows="8"></textarea>
             <button className='btn btn-primary my-2 mx-1' onClick={changeToUpperCase}>Convert to UpperCase</button>
             <button className='btn btn-primary my-2 mx-1' onClick={changeToLowerCase}>Convert to LowerCase</button>
           </div>
       </div>
       <div className={`container my-2 text-${textColor}`}>
         <h2>Your Summary</h2>
         <p className='px-2'>{text.split(" ").length} words and {text.length} letters</p>
          
          <h2>Preview:</h2>
          <p>{text.length>0?text:'Enter something in the textbox above to preview'}</p>
       </div>
    </>
  );
}
