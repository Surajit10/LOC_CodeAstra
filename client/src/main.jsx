import React from "react";
import ReactDOM from "react-dom/client";
import { UserContextProvider } from "../context/userContext";
import App from "./App";
import "./global/global.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <App />
  </UserContextProvider>
);
