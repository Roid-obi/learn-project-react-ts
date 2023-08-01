import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
} else {
  console.error("Root element not found.");
}
