import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLowClick = () => {
    // console.log("Lower was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase ", "success");
  };
  const handleClearClick = () => {
    // console.log("Clear was clicked: " + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared ", "success");
  };
  const handleCopyClick = () => {
    // console.log("Copy Text: " + text);
    let newText = document.getElementById("exampleFormControlTextarea1");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard", "success");
  };
  const extraSpace = () => {
    // console.log("Remove Extra Spaces: " + text);
    let newText = text.split(/[ ]+/);
    setText(newText.join());
    props.showAlert("Extra spaces removeed ", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="exampleFormControlTextarea1"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            rows="3"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1 "
          onClick={handleLowClick}
        >
          Convert to toLowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopyClick}
        >
          Copy text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={extraSpace}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your summary</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words, {text.length} Chracteres
        </p>
        <p>
          {" "}
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
