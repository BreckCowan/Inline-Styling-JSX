import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  background: "blue",
  border: "1px dashed red"
};

customStyle.color = "white";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
