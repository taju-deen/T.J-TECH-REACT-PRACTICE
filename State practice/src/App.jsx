import React from 'react'
import Counter from './Components/Counter'
import Todolist from './Components/Todolist'
import Profile from './Components/profile'

const App = () => {
  return (
    <div>
      <Counter />
      <Todolist/>
      <Profile />
    </div>
  )
}

export default App