import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count ,setCount]=useState(0)


const increment=()=>{
  setCount(()=> count+1)
}
const decrement=()=>{
  setCount(()=> count-1)
}
const Reset=()=>{
    setCount(0)
}

  return (
    <div style={{display:"flex", flexDirection:"column" , gap:"2rem",alignItems:"center", justifyContent:"center", height:"100dvh",boxSizing:"borderBox",margin:"0px",padding:"0px"}}>

        <div style={{backgroundColor:"green",padding:"2rem 0rem",width:"min(500px ,90%)",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",borderRadius:"2rem",boxShadow:"0.1rem 0.1rem blue"}}>

       
        
             <h1>Counter</h1>
        
        
        <div style={{fontSize:"2rem",color:"white"}}>{count}</div>
        <div style={{display:"flex",gap:"2rem",marginTop:"2rem"}}>
            <button onClick={increment} >Increment</button>
             <button onClick={decrement}>Decrement</button> 
             <button onClick={Reset}>Reset</button>
        </div>

    </div>
     </div>
  )
}

export default Counter