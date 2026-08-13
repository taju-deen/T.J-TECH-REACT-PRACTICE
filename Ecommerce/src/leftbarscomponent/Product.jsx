import React from 'react'
import data from "../Db folder/database"

const Product = () => {
  return (
    <div>
      
        {data.map(({img,title,star,reviews,prevPrice,newPrice}) => ( 
        <div className="product-card" key={Math.random()}>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <div className="reviews">

              <h4>{star}</h4>
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