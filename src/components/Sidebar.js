import React from "react";

const Sidebar = () => {
  return (
    <div className="border p-3 rounded shadow-sm">
      <h5 className="mb-3">Filters</h5>

      <div className="mb-4">
        <label className="form-label fw-semibold">Price Range</label>
        <select className="form-select">
          <option>All</option>
          <option>Under $50</option>
          <option>$50 - $100</option>
          <option>$100+</option>
        </select>
      </div>

      <div>
        <label className="form-label fw-semibold">Sort By</label>
        <select className="form-select">
          <option>Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
