import React from "react";

export default function TXextForm(props) {
  return (
    <div>
    <h3>{props.heading}</h3>

      <div class="mb-3">
        <textarea className="form-control" id="box" rows="8"></textarea>
      </div>
    </div>
  );
}
