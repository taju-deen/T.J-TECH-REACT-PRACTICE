import React from "react";
import "./Sidebar.css";

const Price = ({
  selectedPrice,
  setSelectedPrice
}) => {

  return (
    <div className="price-section">

      <div>
        <h1>Price</h1>
      </div>

      <div className="all-price">

        <div className="sub-category">
          <input
            type="radio"
            id="AllPrice"
            name="price"
            className={selectedPrice === "All" ? "nedd" : ""}
            value="All"
            checked={selectedPrice === "All"}
            onChange={(e) => setSelectedPrice(e.target.value)}
          />
          <label htmlFor="AllPrice">All</label>
        </div>

        <div className="sub-category">
          <input
            type="radio"
            id="price1"
            name="price"
            className={selectedPrice === "0-50" ? "nedd" : ""}
            value="0-50"
            checked={selectedPrice === "0-50"}
            onChange={(e) => setSelectedPrice(e.target.value)}
          />
          <label htmlFor="price1">$0-$50</label>
        </div>

        <div className="sub-category">
          <input
            type="radio"
            id="price2"
            name="price"
            className={selectedPrice === "50-100" ? "nedd" : ""}
            value="50-100"
            checked={selectedPrice === "50-100"}
            onChange={(e) => setSelectedPrice(e.target.value)}
          />
          <label htmlFor="price2">$50-$100</label>
        </div>

        <div className="sub-category">
          <input
            type="radio"
            id="price3"
            name="price"
            className={selectedPrice === "100-150" ? "nedd" : ""}
            value="100-150"
            checked={selectedPrice === "100-150"}
            onChange={(e) => setSelectedPrice(e.target.value)}
          />
          <label htmlFor="price3">$100-$150</label>
        </div>

        <div className="sub-category">
          <input
            type="radio"
            id="price4"
            name="price"
            className={selectedPrice === "150+" ? "nedd" : ""}
            value="150+"
            checked={selectedPrice === "150+"}
            onChange={(e) => setSelectedPrice(e.target.value)}
          />
          <label htmlFor="price4">Over $150</label>
        </div>

      </div>

    </div>
  );
};

export default Price;