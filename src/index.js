import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.css";
import "./styles/style.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import CreatePageContextProvider from "./context/CreatePageContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <CreatePageContextProvider>
        <App />
      </CreatePageContextProvider>
    </Router>
  </React.StrictMode>
);
