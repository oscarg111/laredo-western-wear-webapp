import React from "react";

const Item = ({ name, image, price }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={image}
        className="card-img-top"
        alt={name}
        style={{ height: "220px", objectFit: "cover" }}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <p className="fw-bold">${price}</p>
        <button className="btn btn-outline-dark btn-sm">Add to Cart</button>
      </div>
    </div>
  );
};

export default Item;
