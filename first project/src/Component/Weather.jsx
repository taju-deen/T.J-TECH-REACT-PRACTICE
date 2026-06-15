import React from 'react'

const Weather = ({temperature}) => {
  
     
        if(temperature < 15){
            return <h1>It is cold</h1>
        } else if(temperature<=15 && temperature<= 25){
            return <h1>it is nice today</h1>
        } else if(temperature>25){
            return <h1>it is great today </h1>
        } else{
            return <h1>hall</h1>
        }
     
  
}

export default Weather