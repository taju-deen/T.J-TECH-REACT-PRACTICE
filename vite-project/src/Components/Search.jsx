import React from 'react'
import { useState } from 'react'

const search = () => {
    const[showBr, setShowBr]=useState(false)
    const[bgColor,setBgColor]=useState("white")

    const show=(e)=>{
        if(e.target)
        setShow(true)
    }
  return (

    <div>
        <h1>search</h1>
        <div>

        
        {showBr ? ("what is your name"):"give this"}
        </div>
        <button onClick={show}>click</button>
    </div>
  )
}

export default search