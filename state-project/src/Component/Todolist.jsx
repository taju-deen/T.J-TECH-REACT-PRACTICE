import React from 'react'
import { SlCheck } from "react-icons/sl";
import { CiLight } from 'react-icons/ci'
import { MdDelete } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { useState } from 'react';

const Todolist = () => {

  const [inputValue,setinputValue]= useState("")
  const[Todo,setTodo]=useState([])
  const[date,setDate]=useState(Date.now())

  const handleChange=(e)=>{
   setinputValue(e.target.value)
  }

  const newtodo={
    id:Date.now(),
    name:inputValue,
    Time:date
  }

  function handleClick(){
    setTodo([...Todo, newtodo])
    setinputValue("")

  }

  return (
    

    <div className="overall">
      <div className="overall-top">
        <div className="top-left">
          <div>
             <SlCheck />
          </div>
           <div className='middle-top-content'>
             <h1>My To-DoList</h1>
             <p>stay organised and get things done!</p>
           </div>
        </div>
         <div>
            <CiLight/>
         </div>
      </div>
      <div className="middle">
        <input type="text" value={inputValue}  onChange={handleChange} placeholder='What did you need to do-'/>
        <button onClick={handleClick}>Add Task</button>
      </div>

      <div className='last-one'>
        <div className="left-one">
          <p>All</p>
          <p>Active</p>
          <p>Completed</p>
        </div>
        <div  className='right-one'>
          <p>Clear Completed</p>
          <MdDelete />

        </div>
 
      </div>

      
        {Todo.map(({name,id})=>(
            <ul key={id}>
               <div>
              <li><div><span className='box'></span> <span className='name'>{name}</span> </div> 
              <div><span><IoMdTime /> <h1>{id}</h1></span>   <MdDelete /></div></li>
               
              
               </div>
              
            </ul>
        )

        )}
        
     
    </div>

        

        
    
  )
}

export default Todolist