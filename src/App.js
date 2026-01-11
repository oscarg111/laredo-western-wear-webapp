import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import Accessories from "./pages/Accessories";
import Jewelry from "./pages/Jewelery";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />

      {/* Routes */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/jewelry" element={<Jewelry />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
