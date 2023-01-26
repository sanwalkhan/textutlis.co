import { useState } from "react";
import "./App.css";

// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/textForm";

function App() {

  const [mode, setmode] = useState("dark")

  const toggleMode=()=>{
    if(mode==="light"){
      setmode('dark')
    }
    else{
      setmode('light')

    }
  }

  return (
    <div>
      <Navbar title="TextUtils" about="About Us" Home="Home"  mode={mode} togglemode={toggleMode}/>
      <div className="container my-3">
 <TextForm heading="Enter Your Text to Analyze" />        
      </div>
    </div>
  );
}

export default App;
