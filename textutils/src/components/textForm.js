import React, { useState } from "react";

export default function TXextForm(props) {
  const [text, settext] = useState("Enter text Here...!");

  const handleClickUPC = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
  };

  const handleClickLOC = ()=>{
    let newtext = text.toLowerCase();
    settext(newtext);
  }

  const handleonchange = (e) => {
    settext(e.target.value);
  };

  const clearText= ()=>{
    settext(" ")
  }


  const handleCopy= () =>{
    var text = document.getElementById("box")
    text.select(); 
    navigator.clipboard.writeText(text.value)
  }

  const handleExtraSpaces = () =>{
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" "))
  }
  return (
    <div>
    <div className="container">
      <h3>{props.heading}</h3>

      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleonchange}
          id="box"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleClickUPC}>
        Convert to Uppercase
      </button>
      
      <button className="btn btn-secondary mx-3" onClick={handleClickLOC}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary mx-3" onClick={clearText}>
      Clear Text
    </button>

    <button className="btn btn-primary mx-3" onClick={handleCopy}>
      Copy Text
    </button>

    <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>
      Remove Extra Spaces
    </button>



    </div>
    <div className="container my-3">
    <h3>Your Text Summary</h3>
    <p>{text.split(" ").length} Words</p>
    <p>{text.length} Caracters</p>
    <p>{0.008 * text.split(" ").length} Minutes to read </p>
    <h4>Preview</h4>
    <p>{text}</p>
    </div>

    </div>
  );
}
