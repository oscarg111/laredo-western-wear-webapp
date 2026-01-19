import React from "react";
import { useParams, Link } from "react-router-dom";

const ItemPage = () => {
  const { category, subcategory, itemId } = useParams();

  return (
    <div className="container mt-5">
      {/* Breadcrumb navigation */}
      <nav className="mb-4">
        <Link to="/" className="text-decoration-none">
          Home
        </Link>{" "}
        {" / "}
        <Link
          to={`/${category}`}
          className="text-decoration-none text-capitalize"
        >
          {category}
        </Link>
        {" / "}
        <Link
          to={`/${category}/${subcategory}`}
          className="text-decoration-none text-capitalize"
        >
          {subcategory}
        </Link>
      </nav>

      <div className="row">
        {/* Image */}
        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/600x600"
            className="img-fluid rounded shadow-sm"
            alt="Item"
          />
        </div>

        {/* Info */}
        <div className="col-md-6">
          <h1 className="mb-3 text-capitalize">
            {subcategory} Item #{itemId}
          </h1>

          <h3 className="text-danger mb-3">$129.99</h3>

          <p className="mb-4">
            Premium western wear crafted with authentic style and durability.
          </p>

          <button className="btn btn-dark btn-lg w-100">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
