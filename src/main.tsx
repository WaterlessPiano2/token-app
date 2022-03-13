import React from "react";
import ReactDOM from "react-dom";
import { Buffer } from 'buffer';
import "./index.css";
import App from "./App";
import "./index.css";

window.Buffer = Buffer;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
