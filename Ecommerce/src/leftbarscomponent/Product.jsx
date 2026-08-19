import React from "react";
import data from "../Db folder/database";
import "./Rightmenu.css";
import { FaLock } from "react-icons/fa";

const Product = ({
  selectedColor,
  selectedCategory,
  selectedPrice,
  search
}) => {

  const display = data.filter(
    ({ color, category, newPrice, title }) => {

      // COLOR
      const colorMatch =
        selectedColor === "All" ||
        color === selectedColor;


      // CATEGORY
      const categoryMatch =
        selectedCategory === "All" ||
        category === selectedCategory;


      // PRICE
      const price = Number(newPrice);

      let priceMatch = true;

      if (selectedPrice === "0-50") {
        priceMatch = price <= 50;
      }

      if (selectedPrice === "50-100") {
        priceMatch = price > 50 && price <= 100;
      }

      if (selectedPrice === "100-150") {
        priceMatch = price > 100 && price <= 150;
      }

      if (selectedPrice === "150+") {
        priceMatch = price > 150;
      }


      // SEARCH
      const searchMatch =
        title.toLowerCase().includes(search.toLowerCase());


      return (
        colorMatch &&
        categoryMatch &&
        priceMatch &&
        searchMatch
      );
    }
  );


  return (
    <div className="cards">

      {display.map(
        ({ img, title, star, reviews, prevPrice, newPrice }) => (

          <div className="card" key={title}>

            <img src={img} alt={title} />

            <h3>{title}</h3>

            <div className="reviews">

              <div className="all-stars">
                <p>{star}</p>
                <p>{star}</p>
                <p>{star}</p>
                <p>{star}</p>
              </div>

              <p>{reviews}</p>

            </div>

            <div className="price">

              <div className="sub-price">
                <p>{prevPrice}</p>
                <p>{newPrice}</p>
              </div>

              <div>
                <FaLock />
              </div>

            </div>

          </div>

        )
      )}

    </div>
  );
};

export default Product;