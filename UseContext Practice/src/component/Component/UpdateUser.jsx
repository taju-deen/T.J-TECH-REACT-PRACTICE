import { useContext, useState } from "react"
import { UserContext } from "./UserContext"

const UpdateUser = () => {
    const {updateUser}=useContext(UserContext)
    const [newName,setNewName]=useState("")
    const handleClick=(e)=>{
         e.preventDefault()

        if(newName.trim()){
           
            updateUser(newName)

            setNewName("")
        }
    }

  return (
    <div>
        <h1>Update User</h1>
        <form action=""onSubmit={handleClick} >
            <input type="text"  value={newName} placeholder="Update your Name" onChange={(e)=> setNewName(e.target.value)}/>
            <button type="submit">ADD</button>
        </form>
    </div>
  )
}

export default UpdateUser