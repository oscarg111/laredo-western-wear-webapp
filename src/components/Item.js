import React from "react";
import { Link, useParams } from "react-router-dom";

const Item = ({ id, name, image, price }) => {
  const { category, subcategory } = useParams();

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

        <Link
          to={`/${category}/${subcategory}/${id}`}
          className="btn btn-outline-dark btn-sm"
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default Item;
