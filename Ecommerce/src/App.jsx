import React from 'react'
import Category from "./sidebar componenets/Category"
import Price from "./sidebar componenets/price"
import Colors from "./sidebar componenets/Colors"
import Recommended from "./leftbarscomponent/Recommended"
import Menu from  "./leftbarscomponent/Menu"
import Product from "./leftbarscomponent/product"
import "./App.css" 
import { FaCartArrowDown } from "react-icons/fa";

const App = () => {
  return (
    <div className="overall-container">
        <section className="left-side-section">

             <FaCartArrowDown className="FaCartArrowDown"/>

           <Category/>
            <Price/>

            <Colors/>
           
        </section>
        

        <section className="right-side-section">
           <Menu/>
            <Recommended/>

            <Product/>
           
        </section>

    </div>
  )
}

export default App