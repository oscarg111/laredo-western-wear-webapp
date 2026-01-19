import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import Accessories from "./pages/Accessories";
import Jewelry from "./pages/Jewelery";
import Navbar from "./components/Navbar";
import ItemsPage from "./pages/ItemsPage";
import ItemPage from "./pages/ItemPage"; // for one item

function App() {
  return (
    <Router>
      <Navbar />

      {/* Routes */}
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/jewelry" element={<Jewelry />} />
          <Route path="/:category/:subcategory" element={<ItemsPage />} />
          <Route
            path="/:category/:subcategory/:itemId"
            element={<ItemPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
