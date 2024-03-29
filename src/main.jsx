import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/reset.css";
import "./styles/global.css";
import { BrowserRouter } from "react-router-dom";
import SiteContextProvider from "./context/SiteContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SiteContextProvider>
      <App />
    </SiteContextProvider>
  </BrowserRouter>
);
