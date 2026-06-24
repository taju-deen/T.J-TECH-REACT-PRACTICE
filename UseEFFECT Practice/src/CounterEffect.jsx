import React from 'react'
import {useState,useEffect} from "react"

const CounterEffect = () => {

    const [count,setCount]=useState(0);

    function increment(){
        setCount(count+1)
    }

    useEffect(()=>{
        count?document.title="Count"+count:""
    },[count])
  return (
    <div><h1>{count}</h1>
          <button onClick={increment}>Click me</button>
    </div>
  )
}

export default CounterEffect