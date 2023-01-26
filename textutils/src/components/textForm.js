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
    props.showAlert("Converted to LowerrCase", "success");
  };

  const clearText = () => {
    settext(" ");
    props.showAlert("Text Cleared", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("box");
    text.select();
    navigator.clipboard.writeText(text.value);

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
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            onChange={handleonchange}
            id="box"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleClickUPC}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-3" onClick={handleClickLOC}>
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
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} Words</p>
        <p>{text.length} Caracters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read </p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Enter someting to preview it here"}</p>
      </div>
    </div>
  );
}
