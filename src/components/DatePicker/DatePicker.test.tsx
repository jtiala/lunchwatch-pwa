import React from "react";
import ReactDOM from "react-dom";

import DatePicker from "./DatePicker";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DatePicker />, div);
  ReactDOM.unmountComponentAtNode(div);
});
