import React from 'react'
import { CiHeart } from "react-icons/ci";
import { IoMdCart } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import "./Rightmenu.css"

const Menu = () => {
  return (
    <div className="Top-menu">
        <input type="text" placeholder="Enter Your Search Shoes" />

        <div className="react-icons">

          <CiHeart />
          <IoMdCart />
          <RiContactsLine />

        </div>

    </div>
  )
}

export default Menu