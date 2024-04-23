import './App.css';
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';

import NavSidebar from "./components/NavSidebar";
import customTheme from './themes/customTheme';
import Dashboard from "./pages/dashboard";
import Accounts from "./pages/accounts";
import Transactions from "./pages/transactions";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <NavSidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
