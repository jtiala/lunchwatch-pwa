import React from "react";
import ReactDOM from "react-dom";
import LocationPicker from "./LocationPicker";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LocationPicker />, div);
  ReactDOM.unmountComponentAtNode(div);
});
