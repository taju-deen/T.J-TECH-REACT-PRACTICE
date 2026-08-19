import React from "react";
import "./Sidebar.css";

const Colors = ({
  selectedColor,
  setSelectedColor
}) => {

  return (
    <div className="colors-section">

      <div>
        <h1>Colors</h1>
      </div>

      <div className="all-colors">

        <div className="sub-category">
          <input
            type="radio"
            id="AllColor"
            name="color"
            className={selectedColor === "All" ? "nedd" : ""}
            value="All"
            checked={selectedColor === "All"}
            onChange={(e) => setSelectedColor(e.target.value)}
          />
          <label htmlFor="AllColor">All</label>
        </div>

        <div className="sub-category">
          <input
            type="radio"
            id="Black"
            name="color"
            className={selectedColor === "black" ? "nedd" : ""}
            value="black"
            checked={selectedColor === "black"}
            onChange={(e) => setSelectedColor(e.target.value)}
          />
          <label htmlFor="Black">Black</label>
        </div>

        <div className="sub-category">
          <input
            type="radio"
            id="Blue"
            name="color"
            className={selectedColor === "blue" ? "nedd" : ""}
            value="blue"
            checked={selectedColor === "blue"}
            onChange={(e) => setSelectedColor(e.target.value)}
          />
          <label htmlFor="Blue">Blue</label>
        </div>

        <div className="sub-category">
          <input
            type="radio"
            id="Red"
            name="color"
            className={selectedColor === "red" ? "nedd" : ""}
            value="red"
            checked={selectedColor === "red"}
            onChange={(e) => setSelectedColor(e.target.value)}
          />
          <label htmlFor="Red">Red</label>
        </div>

        <div className="sub-category">
          <input
            type="radio"
            id="Green"
            name="color"
            className={selectedColor === "green" ? "nedd" : ""}
            value="green"
            checked={selectedColor === "green"}
            onChange={(e) => setSelectedColor(e.target.value)}
          />
          <label htmlFor="Green">Green</label>
        </div>

        <div className="sub-category">
          <input
            type="radio"
            id="White"
            name="color"
            className={selectedColor === "white" ? "nedd" : ""}
            value="white"
            checked={selectedColor === "white"}
            onChange={(e) => setSelectedColor(e.target.value)}
          />
          <label htmlFor="White">White</label>
        </div>

      </div>

    </div>
  );
};

export default Colors;