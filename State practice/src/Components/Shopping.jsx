import React, { useState } from 'react'

const Shopping = () => {
    const[items,setItem]=useState([]);
    const[name,setName]=useState("");
    const [quantity,setQuantity]=useState("");



    const handleSubmit=(e)=>{
       e.preventDefault();
       if(!name || !quantity) return;

       const newitems={
        name,quantity:parseInt(quantity)
       }

       setItem([...items,newitems])
       setName("");
       setQuantity("")
    }
  return (
    <div>
        <h1>Shooping list</h1>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter The name of an Item'/>
            <input type="number" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
            <button >Click To ADD</button>
           <div>
         {items.map((item,index)=>(
      <ul key={index}>
        <li>Name:-{item.name}------ Quantity-{item.quantity}</li>
      </ul>

         ))}
             </div> 
        </form>
    </div>
  )
}

export default Shopping