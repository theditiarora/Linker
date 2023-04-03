import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserContext } from "./AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContext.Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserContext.Provider>
);
