import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recovery from "./routes/RecoveryPage";
import CloudPage from "./routes/CloudPage";
import ContactPage from "./routes/ContactPage";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/szafarnia" element={<Recovery />} />
      <Route path="/zelazowa-wola" element={<CloudPage />} />
      <Route path="/dziecinstwo" element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
