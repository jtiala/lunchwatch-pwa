import React from "react";
import ReactDOM from "react-dom";

import MenuItemComponent from "./MenuItemComponent";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MenuItemComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
