import React from 'react'
import { useState } from 'react'

const Calculator = () => {
    const [input,setInputValue]=useState("")
    const [one, setOne]=useState("")

    const display=(value)=>{
      
    const answer= setInputValue(input + value)

    }

    const equal=(()=>{
     const answer=(eval(input))

      setOne(answer)
      setInputValue(answer)
    })
  return (
    <div className='Overall-container'>
        <h1> T.J TECH Calculator</h1>
        <input type="text" className='input-answer' value={input} />
        <input type="text" className='input' value={one} />



        <div className="calculator-menu">
            
            <span onClick={()=>display("/")}>/</span>
            <span onClick={()=>display("+")}>+</span>
            <span onClick={()=>display("-")}>-</span>
            <span onClick={()=>display("*")}>*</span>
            <span onClick={()=>display("1")}>1</span>
            <span onClick={()=>display("/")}>/</span>
            <span onClick={()=>display("2")}>2</span>
            <span onClick={()=>display("3")}>3</span>
            <span onClick={()=>display("4")}>4</span>
            <span onClick={()=>display("5")}>5</span>
            <span onClick={()=>display("6")}>6</span>
            <span onClick={()=>display("7")}>7</span>
            <span onClick={()=>display("8")}>8</span>
            <span onClick={()=>display("9")}>9</span>
            <span onClick={()=>display("0")}>0</span>
            <button onClick={equal}>Click</button>

        </div>
        
    </div>
  )
}

export default Calculator