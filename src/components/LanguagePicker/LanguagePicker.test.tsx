import React from "react";
import ReactDOM from "react-dom";

import LanguagePicker from "./LanguagePicker";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LanguagePicker />, div);
  ReactDOM.unmountComponentAtNode(div);
});
