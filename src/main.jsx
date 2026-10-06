import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import logo from "./assets/logo.png";
import "./index.css";

const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.type = "image/png";
favicon.href = logo;
document.head.appendChild(favicon);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
