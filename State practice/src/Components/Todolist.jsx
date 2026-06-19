import { useState } from "react"


const Todolist = () => {
    const [inputValue,setInputValue]=useState("");
    const[Todo,setTodo]=useState([]);

  const handleChange=(e)=>{
   const show= e.target.value;

    setInputValue(show);
  }

const handleSubmit=(e)=>{
    e.preventDefault();
    setTodo([...Todo,inputValue]);
    setInputValue("");
}



  return (
    <div>
        <h1>Todolist</h1>
        <form action="" onSubmit={handleSubmit}>
        <input type="text" value={inputValue} placeholder="Enter Your name" onChange={handleChange} />
        
        <button  >Press me</button>
        </form>
        <ul>
          {Todo.map((item,index)=>(
            <li key={index}>{item}</li>
          ))}
        </ul>

    </div>
  )
}

export default Todolist