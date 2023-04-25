import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import Buffer from './components/Buffer';

function App() {
  const [mode,setMode]=useState("light");

  const [model,setmodeBt]=useState("Enable Dark Mode");
  
  
  
  
 
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.background="grey";
      setmodeBt("Enable Light Mode");
    }
    else{
      setMode("light");
      document.body.style.background="white";
      setmodeBt("Enable Dark Mode");
    }
  }
  return (
    <div>
   <Navbar fashion={toggleMode}  theme={model} />
   <News/>
   </div>
  );
}

export default App;