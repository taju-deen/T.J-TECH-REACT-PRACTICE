import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoMdCart } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import "./Rightmenu.css";

const Menu = ({ search, setSearch }) => {

  return (
    <div className="Top-menu">

      <input
        type="text"
        placeholder="Enter Your Search Shoes"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="react-icons">
        <CiHeart />
        <IoMdCart />
        <RiContactsLine />
      </div>

    </div>
  );
};

export default Menu;