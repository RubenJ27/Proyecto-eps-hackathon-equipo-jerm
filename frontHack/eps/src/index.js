import React from "react";
import ReactDOM from "react-dom/client";

import "./App.css";
import Headers from "./components/header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Headers />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
