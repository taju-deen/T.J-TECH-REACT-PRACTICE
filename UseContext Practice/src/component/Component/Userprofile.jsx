
import {UserContext} from "./UserContext"
import { useContext } from 'react'


const Userprofile = () => {
    const {user}=useContext(UserContext)
  return (
    <div>{user.name}</div>
  )
}

export default Userprofile