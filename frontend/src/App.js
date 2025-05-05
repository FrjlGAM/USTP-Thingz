import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage"; 
import RegistrationPage from "./components/RegistrationPage";
import Terms from "./components/Terms"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/terms" element={<Terms />} />
        
      </Routes>
    </Router>
  );
}

export default App;