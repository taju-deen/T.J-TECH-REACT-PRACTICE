import React from 'react'
import { useState } from 'react'
import Search from './Components/search'

const App = () => {

  const[backgroundColor , setBackgroundColor] =useState("white")
  const [textColor, setColor]=useState("#1b1b1b")
  const [buttonStyle, setButtonStyle]=useState("white")

  const handleClick=()=>{
    setBackgroundColor(backgroundColor="white"? "#1b1b1b":"white" )
    setTextColor(textColor="#1b1b1b"? "#ffa31a": "#1b1b1b")
    setbuttonStyle(backgroundColor="white"? "#1b1b1b" :"white")
  }
  return (
    <div style={{backgroundColor: backgroundColor, color:textColor}}>
      <button onClick={handleClick} style={{border:`2px solid ${textColor}`}}>{backgroundColor="#1b1b1b"? "Black theme":"white theme"}</button>

      <section className='Content'>

        <h1>Welcome to A <br /> Real World ...</h1>

      </section> 


<div>
  <search></search>
</div>

      
    </div>
  )
}

export default App