import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from "./navigation/navbar";
import Homepage from "./pages/homepage";
import Work from "./pages/work";
import Contact from "./pages/contact";
import Footer from "./footer";

function App() {
  return (
    <div className="App">
        <Router>
          <div className="app-wrapper">
          <NavBar />
          <div className="page-wrapper">
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/work" element={<Work/>}/>        
            </Routes>
          </div>
          <Footer />
          </div>
        </Router>
    </div>
  );
}

export default App;
