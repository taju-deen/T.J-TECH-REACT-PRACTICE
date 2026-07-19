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
        <div style={{display:"flex",gap:"1rem",marginTop:"2rem",justifyContent:"space-around"}}>
             <button  style={{padding:"0.5em",borderRadius:"10px"}} onClick={decrement}>Decrement</button> 
             <button style={{padding:"0.5em",borderRadius:"10px",fontWeight:"3rem"}}onClick={Reset}>Reset</button>
            <button style={{padding:"0.5rem",borderRadius:"10px",fontWeight:"3rem"}} onClick={increment} >Increment</button>
        </div>

    </div>
     </div>
  )
}

export default Counter