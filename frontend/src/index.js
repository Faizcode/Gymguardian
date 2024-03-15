import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import theme from "./themes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    <ToastContainer />
  </BrowserRouter>
);
