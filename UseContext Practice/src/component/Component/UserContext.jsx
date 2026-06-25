import React from 'react'
import { createContext,useState } from 'react'


export const UserContext = createContext();
const UserProvider = ({children}) => {
    const[user,setUser]=useState({name:"John Doe"})
   
   const updateUser=(newName)=>{
    setUser({name: newName  })
   }

  return (
    <div>
        <UserContext.Provider value={{user,updateUser}}>
            {children}


        </UserContext.Provider>
    </div>
  )
}

export default UserProvider