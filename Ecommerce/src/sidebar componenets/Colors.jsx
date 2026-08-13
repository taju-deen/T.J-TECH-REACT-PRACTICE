import React from 'react'
import "./Sidebar.css"

const Colors = () => {
  return (
    <div className="colors-section">
          <div>
             <h1>Colors</h1>
         </div>
        
        <div className="all-colors">
            <div className="sub-category">
              <input type="radio" id="All" />
              <label htmlFor="All">All</label>
            </div>
            <div className="sub-category">
              <input type="radio" id="Black" />
              <label htmlFor="Black">Black</label>
            </div>
            <div className="sub-category">
              <input type="radio" id="Blue" />
              <label htmlFor="Blue">Blue</label>
            </div>
            <div className="sub-category">
              <input type="radio" id="Red" />
              <label htmlFor="Red">Red</label>
            </div>
            <div className="sub-category">
              <input type="radio" id="Green" style={{Color:"green"}} />
              <label htmlFor="Green">Green</label>
            </div>
            <div className="sub-category">
              <input type="radio" id="White" />
              <label htmlFor="White">White</label>
            </div>


        </div>
    </div>
  )
}

export default Colors