import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'  



const Useeffect2 = () => {
  const [items,setitems]=useState([]);
  useEffect(()=>{
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then((res)=>{ 
      console.log(res.data.meals);
      setitems(res.data.meals);
    }).catch((err)=>{
      console.log(err);
    });
  },[]);
  const itemsList=items.map(({strMeal,idMeal,strMealThumb})=>{
    return(
      <div key={idMeal}>
        <h3>{strMeal}</h3>
        <img src={strMealThumb} alt={strMeal} />
      </div>
    );
  });


return(
  <div>
    {itemsList}
  </div>
    
);

};

export default Useeffect2 