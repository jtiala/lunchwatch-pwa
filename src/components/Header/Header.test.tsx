import React from "react";
import ReactDOM from "react-dom";
import { StaticRouter } from "react-router-dom";

import Header from "./Header";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <StaticRouter>
      <Header />
    </StaticRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
