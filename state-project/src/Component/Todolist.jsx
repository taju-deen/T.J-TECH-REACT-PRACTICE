import React from 'react'
import {useState} from "react"

const Todolist = () => {

    const[input,setInput]=useState([])
    const [inputvalue,setInputValue]=useState("")

    const handleChange=(e)=>{
    const real=  e.target.value;
    setInputValue(real)
    }
    const newtodo={
        id:Math.random(),
        text:inputvalue
    }
    const Add=()=>{
        setInput([...input,newtodo]);
        setInputValue("")




    }


  return (
    <div>
        <div>
            <h1 className="heading">TodoList</h1>
            <div className="sub-menu">
                <input type="text" placeholder='Add to do' onChange={handleChange} value={inputvalue}/>
                <button onClick={Add}>Add</button>
                <div>
                    {input.map((one)=>(
                        <ul key={one.id}>
                            {one.text}
                        </ul>
                    ))}
                </div>
            </div>
        </div>

        <div>
            
        </div>
    </div>
  )
}

export default Todolist