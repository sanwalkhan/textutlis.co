import React, { useState } from "react";

export default function TXextForm(props) {
  const [text, settext] = useState("");

  const handleClickUPC = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showAlert("Text Converted to UpperCase", "success");
  };

  const handleClickLOC = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showAlert("Text Converted to LowerrCase", "success");
  };

  const handleonchange = (e) => {
    settext(e.target.value);
  };

  const clearText = () => {
    settext("");
    props.showAlert("Text Cleared", "success");
  };

  const handleCopy = () => {
    // var text = document.getElementById("box");
    // text.select();
    navigator.clipboard.writeText(text);

    props.showAlert("Text Copied", "success");
  };

  const handleExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };
  return (
    <div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h3>{props.heading}</h3>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            onChange={handleonchange}
            id="box"
            rows="8"
          ></textarea>
        </div>
        <div className="d-grid gap-1 d-md-block">
          <button disabled={text.length ===0} className="btn btn-primary mx-3 my-1" onClick={handleClickUPC}>
            Convert to Uppercase
          </button>

          <button disabled={text.length ===0} className="btn btn-primary mx-3 my-1" onClick={handleClickLOC}>
            Convert to LowerCase
          </button>
          <button disabled={text.length ===0} className="btn btn-primary mx-3 my-1" onClick={clearText}>
            Clear Text
          </button>

          <button disabled={text.length ===0} className="btn btn-primary mx-3 my-1" onClick={handleCopy}>
            Copy Text
          </button>

          <button disabled={text.length ===0} className="btn btn-primary mx-3 my-1" onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h3>Your Text Summary</h3>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} Words &  {text.length} Caracters</p>
        <p> {0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes to read </p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </div>
  );
}
