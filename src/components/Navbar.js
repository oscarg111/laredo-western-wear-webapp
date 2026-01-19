import React from "react";
import { Link } from "react-router-dom";
import laredo_western_wear_logo from "../assets/logo.png";
import "./Navbar.css";

const menu = {
  mens: ["Tops", "Bottoms", "Hats", "Boots"],
  womens: ["Dresses", "Tops", "Bottoms", "Boots"],
  accessories: ["Belts", "Bags", "Wallets"],
  jewelry: ["Necklaces", "Rings", "Bracelets"],
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid px-4">
        {/* LEFT: Logo */}
        <Link className="navbar-brand me-auto" to="/">
          <img
            src={laredo_western_wear_logo}
            alt="Laredo Western Wear"
            style={{ maxWidth: "260px" }}
          />
        </Link>

        {/* CENTER: Nav Tabs */}
        <ul className="navbar-nav mx-auto d-flex flex-row gap-4">
          {Object.keys(menu).map((route) => (
            <li className="nav-item nav-hover" key={route}>
              <Link
                className="nav-link fs-4 text-dark text-capitalize"
                to={`/${route}`}
              >
                {route}
              </Link>

              {/* Hover Menu */}
              <div className="hover-menu">
                {menu[route].map((item) => (
                  <Link
                    key={item}
                    to={`/${route}/${item.toLowerCase()}`}
                    className="hover-item"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </ul>

        {/* RIGHT: placeholder (icons later if you want) */}
        <div style={{ width: "260px" }} />
      </div>
    </nav>
  );
};

export default Navbar;
