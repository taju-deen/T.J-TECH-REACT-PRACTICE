import React from 'react'
import "./Sidebar.css"

const Category = () => {
  return (
    <section className="category-section">
      
        <div>
          <h1>Category</h1>
        </div>
        <div className="all-category">
          <div className="sub-category">
                 <input type="radio" id="All" />
                  <label htmlFor="All">All</label>
          </div>
          <div className="sub-category">
             <input type="radio" id="Sneakers" />
             <label htmlFor="Sneakers">Sneakers</label>
          </div>
          
          <div className="sub-category">
                <input type="radio" id="Flats" />
                <label htmlFor="Flats">Flats</label>
          </div>
          
          <div className="sub-category">
            <input type="radio" id="Sandals" />
          <label htmlFor="Sandals">Sandals</label>
          </div>
          <div>
            <div className="sub-category">
              <input type="radio" id="Hills" />
            <label htmlFor="Hills">Hills</label>
            </div>
          </div>
        </div>

    </section>
  )
}

export default Category