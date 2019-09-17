import React from "react";
import ReactDOM from "react-dom";
import TextPage from "./TextPage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TextPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
