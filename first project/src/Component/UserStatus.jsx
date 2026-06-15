

const UserStatus = ({logged, isAdmin}) => {
 
    if(logged && isAdmin){
        return <h1>Welcome User</h1>
    }
    else{
        return <h1>Welcome Admin</h1>
    }
  
}

export default UserStatus