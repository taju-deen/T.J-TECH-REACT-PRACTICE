import React from 'react'
import Counter from './Components/Counter'
import Todolist from './Components/Todolist'
import Profile from './Components/profile'
import Shopping from './Components/Shopping'

const App = () => {
  return (
    <div style={{display:"flex", flexDirection:"column" ,gap:"2rem"}}>
      <Counter />
      <Todolist/>
      <Profile />
      <Shopping/>
    </div>
  )
}

export default App