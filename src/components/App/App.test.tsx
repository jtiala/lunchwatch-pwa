import React from "react";
import ReactDOM from "react-dom";
import { StaticRouter } from "react-router-dom";

import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <StaticRouter>
      <App />
    </StaticRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
