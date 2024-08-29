import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
// import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Render Navbar at the top */}
        <Navbar />
        <Hero />
      </div>
    </Router>
  );
}

export default App;
