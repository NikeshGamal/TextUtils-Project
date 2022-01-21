import { useState } from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import TextForm from './Components/TextForm';


function App() {
   const [mode,setMode]=useState('light');
   
   let toggleMode=()=>{
         if(mode==='light'){
                  setMode('dark');
                  document.body.style.backgroundColor='#042743';
         }else{
           setMode('light');
           document.body.style.backgroundColor='white';
         }
   }

  return (
    <>
   <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
   <TextForm heading="Enter the text to analyze"  mode={mode}/>
    </>
  );
}

export default App;
