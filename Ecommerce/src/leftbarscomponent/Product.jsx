import React from 'react'
import data from "../Db folder/database"
import "./Rightmenu.css"

const Product = () => {
  return (
    <div className="cards">
      
        {data.map(({img,title,star,reviews,prevPrice,newPrice}) => ( 
        <div className="card" key={Math.random()}>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <div className="reviews">

              <div className="all-stars">
                <p>{star}</p>
                <p>{star}</p>
                <p>{star}</p>
                <p>{star}</p>

              </div>
              <p>{reviews}</p>
            </div>
            <div className="price">
              <p>{prevPrice}</p>
              <p>{newPrice}</p>
            </div>
           </div>

            
        )) }
      

    </div>
  )
}

export default Product