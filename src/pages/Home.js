import React from "react";
import "./Home.css";

import homepage_background from "../assets/homepage_background.png";
import homepage_image from "../assets/homepage_image.png";
import cowboy_hat from "../assets/cowboy_hat.png";
import useFadeInOnScroll from "../utilityFiles/useFadeInOnScroll";

function Home() {
  useFadeInOnScroll();

  const items = [
    {
      name: "Cowboy Hat",
      image: "https://via.placeholder.com/400x300",
      price: 79.99,
      id: 1,
    },
    {
      name: "Western Boots",
      image: "https://via.placeholder.com/400x300",
      price: 149.99,
      id: 2,
    },
    {
      name: "Shirt",
      image: "www.web.net/png",
      price: 106.09,
      id: 3,
    },
  ];

  return (
    <>
      {/* HERO */}
      <div>
        <div className="hero-bg d-flex align-items-center justify-content-center text-center">
          <div>
            <h1 className="text-white display-3 fw-bold">
              Laredo Western Wear
            </h1>
            <p className="text-white fs-4">
              Authentic Western Style Since Day One
            </p>
          </div>
        </div>
      </div>

      {/* FEATURED CATEGORIES */}
      <div className="container my-5">
        <div className="fade-section text-center mb-4">
          <h2 className="fw-bold">Shop by Category</h2>
        </div>

        <div className="row g-4">
          {["Boots", "Hats", "Denim", "Accessories"].map((cat) => (
            <div className="col-md-3 col-sm-6 fade-section" key={cat}>
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body">
                  <h5 className="card-title">{cat}</h5>
                  <p className="card-text">Rugged. Timeless. Built to last.</p>
                  <button className="btn btn-dark btn-sm">Shop {cat}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURED PRODUCTS */}
      <div className="container my-5">
        <div className="fade-section text-center mb-4">
          <h2 className="fw-bold">Featured Products</h2>
        </div>

        <div className="row g-4">
          {items.map((item) => (
            <div className="col-md-4 fade-section" key={item.id}>
              <div className="card h-100 shadow">
                {/* Placeholder for product image */}
                {/* <div className="bg-secondary" style={{ height: "250px" }}> */}
                <img
                  style={{ height: "300px", width: "auto" }}
                  src={cowboy_hat}
                />
                {/* </div> */}

                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    Handcrafted western boots built for comfort and durability.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold">{item.price}</span>
                    <button className="btn btn-outline-dark btn-sm">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BRAND STORY */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6 fade-section">
            <h2 className="fw-bold">Our Heritage</h2>
            <p>
              Laredo Western Wear is built on tradition, craftsmanship, and the
              spirit of the American West. Every piece is designed to honor the
              cowboy way of life.
            </p>
            <button className="btn btn-dark">Learn More</button>
          </div>

          <div className="col-md-6 fade-section">
            {/* <div
              className="bg-secondary rounded"
              style={{ height: "300px" }}
            ></div> */}
            <img src={homepage_image} style={{ height: "300px" }} />
          </div>
        </div>
      </div>

      {/* CTA BANNER */}
      <div className="bg-dark text-white text-center py-5">
        <div className="fade-section">
          <h2 className="fw-bold">Gear Up for the Western Lifestyle</h2>
          <p className="fs-5">Shop our latest arrivals today</p>
          <button className="btn btn-outline-light btn-lg">Shop Now</button>
        </div>
      </div>
    </>
  );
}

export default Home;
