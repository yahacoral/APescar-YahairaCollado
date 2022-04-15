import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Mainview from "./Components/Mainview";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Banner/>
        <Navbar/>
        <Mainview/>
      </div>
    </Router>
  );
}
