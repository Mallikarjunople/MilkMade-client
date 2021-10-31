import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { transitions,Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options ={
  timeout:2000,
  transition: transitions.SCALE
}

ReactDOM.render(
  <>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </>,
  document.getElementById("root")
);

serviceWorker.unregister();
