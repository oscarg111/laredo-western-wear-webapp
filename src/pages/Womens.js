import React from "react";
import Item from "../components/Item";
import Sidebar from "../components/Sidebar";

const Womens = () => {
  const items = [
    {
      name: "Cowboy Hat",
      image: "https://via.placeholder.com/400x300",
      price: 79.99,
    },
    {
      name: "Western Boots",
      image: "https://via.placeholder.com/400x300",
      price: 149.99,
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Women's Collection</h2>

      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>

        <div className="col-md-9">
          <div className="row g-4">
            {items.map((item, idx) => (
              <div className="col-md-4" key={idx}>
                <Item {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Womens;
