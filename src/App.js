import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import Navbar from "./Components/Navbar";
import TextForm from './Components/TextForm';


function App() {
  //section for switching between modes
   const [mode,setMode]=useState('light');
   
   let toggleMode=()=>{
         if(mode==='light'){
                  setMode('dark');
                  document.body.style.backgroundColor='#042743';
                  showAlert("Dark Mode Enable","success");
         }else{
           setMode('light');
           document.body.style.backgroundColor='white';
           showAlert("Light Mode Enable","success");
         }
   }
 
    //section for alert
    const [alert,setAlert]=useState(null);
   
    const showAlert=(message,type)=>{
       setAlert( {
           msg:message,
           type:type
       });

       setTimeout(() => {
         setAlert(null);
       }, 1500);
   }

  return (
    <>
   <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <TextForm showAlert={showAlert} heading="Enter the text to analyze"  mode={mode}/>
    </>
  );
}

export default App;
