import React from 'react'
import "./Sidebar.css"

const Price = () => {
  return (
    <div className="price-section">

        <div >
          <h1>Price</h1>
        </div>

        <div className="all-price">
          <div className="sub-category">
            <input type="radio" id="All" />
            <label htmlFor="All">All</label>
          </div>
          <div className="sub-category">
            <input type="radio" id="price1" />
            <label htmlFor="price1">$0-$50</label>
          </div>
          <div className="sub-category">
            <input type="radio" id="price2" />
            <label htmlFor="price2">$50-$100</label>
          </div>
          <div className="sub-category">
            <input type="radio" id="price3" />
            <label htmlFor="price3">$100-$150</label>
          </div>
          <div className="sub-category">
            <input type="radio" id="price4" />
            <label htmlFor="price4">Over $150</label>
          </div>
        </div>
    </div>
  )
}

export default Price