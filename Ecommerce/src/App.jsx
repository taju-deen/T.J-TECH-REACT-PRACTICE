import React, { useState } from "react";
import Category from "./sidebar componenets/Category";
import Price from "./sidebar componenets/price";
import Colors from "./sidebar componenets/Colors";
import Recommended from "./leftbarscomponent/Recommended";
import Menu from "./leftbarscomponent/Menu";
import Product from "./leftbarscomponent/product";
import "./App.css";
import { FaCartArrowDown } from "react-icons/fa";

const App = () => {
  const [selectedCompany, setSelectedCompany] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [search, setSearch] = useState("");

  return (
    <div className="overall-container">

      <section className="left-side-section">

        <FaCartArrowDown className="FaCartArrowDown" />

        <Category
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Price
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
        />

        <Colors
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />

      </section>

      <section className="right-side-section">

        <Menu
          search={search}
          setSearch={setSearch}
        />

        <Recommended setSelectedCompany={setSelectedCompany} />

        <Product
          selectedColor={selectedColor}
          selectedCategory={selectedCategory}
          selectedPrice={selectedPrice}
          search={search}
          selectedCompany={selectedCompany}
        />

      </section>

    </div>
  );
};

export default App