import React from "react";
import { createRoot } from "react-dom/client"; // Używamy createRoot zamiast ReactDOM.render
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductScreen from "./common/ProductScreen";

createRoot(document.getElementById("root")).render(
  // Używamy createRoot zamiast ReactDOM.render
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="productscreen/:id" element={<ProductScreen />} />
    </Routes>
  </BrowserRouter>
);
