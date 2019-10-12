import React from "react";
import ReactDOM from "react-dom";

import "./i18n/i18n";
import * as serviceWorker from "./serviceWorker";
import App from "./components/App/App";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register({ onUpdate: (swRegistration: ServiceWorkerRegistration, sw: ServiceWorker ) =>{
    const snackbar = document.getElementById("#snackbarPWA")
      snackbar!.className = "show";
      snackbar!.addEventListener('click', () => {
        sw.postMessage({ action: 'skipWaiting' });
        window.location.reload();
      });
}});
