import React from "react";
import ReactDOM from "react-dom";

import "./i18n";
import * as serviceWorker from "./serviceWorker";
import App from "./components/App/App";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();
