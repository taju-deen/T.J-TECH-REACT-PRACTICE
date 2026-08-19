import React from "react";
import "./Sidebar.css";

const Category = ({
  selectedCategory,
  setSelectedCategory
}) => {

  return (
    <section className="category-section">

      <div>
        <h1>Category</h1>
      </div>

      <div className="all-category">

        <div className="sub-category">
          <input
            type="radio"
            id="AllCategory"
            name="category"
            className={selectedCategory === "All" ? "nedd" : ""}
            value="All"
            checked={selectedCategory === "All"}
            onChange={(e) => setSelectedCategory(e.target.value)}
          />
          <label htmlFor="AllCategory">All</label>
        </div>

        <div className="sub-category">
          <input
            type="radio"
            id="Sneakers"
            name="category"
            className={selectedCategory === "sneakers" ? "nedd" : ""}
            value="sneakers"
            checked={selectedCategory === "sneakers"}
            onChange={(e) => setSelectedCategory(e.target.value)}
          />
          <label htmlFor="Sneakers">Sneakers</label>
        </div>

        <div className="sub-category">
          <input
            type="radio"
            id="Flats"
            name="category"
            className={selectedCategory === "flats" ? "nedd" : ""}
            value="flats"
            checked={selectedCategory === "flats"}
            onChange={(e) => setSelectedCategory(e.target.value)}
          />
          <label htmlFor="Flats">Flats</label>
        </div>

        <div className="sub-category">
          <input
            type="radio"
            id="Sandals"
            name="category"
            className={selectedCategory === "sandals" ? "nedd" : ""}
            value="sandals"
            checked={selectedCategory === "sandals"}
            onChange={(e) => setSelectedCategory(e.target.value)}
          />
          <label htmlFor="Sandals">Sandals</label>
        </div>

        <div className="sub-category">
          <input
            type="radio"
            id="Heels"
            name="category"
            className={selectedCategory === "heels" ? "nedd" : ""}
            value="heels"
            checked={selectedCategory === "heels"}
            onChange={(e) => setSelectedCategory(e.target.value)}
          />
          <label htmlFor="Heels">Heels</label>
        </div>

      </div>

    </section>
  );
};

export default Category;