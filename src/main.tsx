import React from "react";
import ReactDOM from "react-dom/client";
import "reset-css";
import "@/assets/styles/global.scss";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>,
);
