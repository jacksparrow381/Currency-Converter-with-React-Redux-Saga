import React, { useState, useEffect } from "react";
import { CurrencyConverterForm } from "./Components/CurrencyConverterForm";
import { CurrencyRates } from "./Components/CurrencyRates";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";

export function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<CurrencyConverterForm />} />
        <Route path="rate" element={<CurrencyRates />} />
      </Routes>
    </Router>
  );
}
