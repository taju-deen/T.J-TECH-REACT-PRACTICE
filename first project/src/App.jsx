
import React from 'react'
import Weather from './Component/weather'
import UserStatus from './Component/UserStatus'
import Greetings from './Component/Greetings'

const App = () => {
  return (
    <div>
      <Weather temperature={100}/>
      <UserStatus logged={true} isAdmin={false}></UserStatus>
        <Greetings time="morni"></Greetings>
    </div>
  )
}

export default App