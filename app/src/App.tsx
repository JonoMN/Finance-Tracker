import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Accounts from "./pages/accounts";
import Transactions from "./pages/transactions";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </div>
  );
}

export default App;
