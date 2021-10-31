import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

ReactDOM.render(
  <>
    <AlertProvider template={AlertTemplate}>
      <App />
    </AlertProvider>
  </>,
  document.getElementById("root")
);

serviceWorker.unregister();
