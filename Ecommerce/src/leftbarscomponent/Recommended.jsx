import React from 'react'
import display from "./Product"
import "./Rightmenu.css"

const Recommended = ({  setSelectedCompany }) => {
  return (
    <div className="recommended"> 
        <h1>Recommended</h1>
                      
        <button  onClick={() => setSelectedCompany("All")}>All Products</button>
        <button   onClick={() => setSelectedCompany("Nike")} >Nike</button>
        <button  onClick={() => setSelectedCompany("Adidas")}>Adiddas</button>
        <button  onClick={() => setSelectedCompany("Puma")}>Puma</button>
        <button  onClick={() => setSelectedCompany("Vans")}>Vars</button>
    </div>
  )
}

export default Recommended