import React , {useState} from "react";

export default function TXextForm(props) {
  return (
    <div>
    <h3>{props.heading}</h3>

      <div className="mb-3">
        <textarea className="form-control" id="box" rows="8"></textarea>
      </div>
      <button className="btn btn-primary">Convert to Uppercase</button>
    </div>
  );
}
