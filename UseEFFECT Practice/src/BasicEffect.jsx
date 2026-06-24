import React from 'react'
import { useEffect } from 'react'

const BasicEffect = () => {
    useEffect(()=>{
    console.log("useEffect is called")
  })

  return (
    <div>
  
      <h1>Useeffect</h1>
    </div>
  )
}

export default BasicEffect