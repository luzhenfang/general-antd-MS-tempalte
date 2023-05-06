/*
 * @Author: luzhenfang 1318659507@qq.com
 * @Date: 2023-04-03 15:45:54
 * @LastEditors: luzhenfang 1318659507@qq.com
 * @LastEditTime: 2023-05-01 21:41:32
 * @FilePath: /general-antd-MS-tempalte/src/main.tsx
 * @Description:
 *
 */
import React from "react";
import ReactDOM from "react-dom/client";
// import "reset-css";
// import "@/assets/styles/global.scss";
import "@/index.css";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
