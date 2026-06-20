import React, { useState } from 'react'

const Profile= () => {



    const[userInfo,setUserInfo]=useState({
        name:"",
        age:"",
        hobby:""
    })
  return (
    <div>
        <h1>Profile information</h1>

        <h2>Name:{userInfo.name}</h2>
        <h2>Age:{userInfo.age}</h2>
        <h2>Hobby:{userInfo.hobby}</h2>

       <form action="" style={{display:"flex",flexDirection:"column",gap:"10px", marginTop:"20px",width:"30%"}}>
        <input  type="text" placeholder='Enter your name' onChange={(e)=>setUserInfo({...userInfo,name:e.target.value})} />

        <input type="text" placeholder='Enter your age' onChange={(e)=>setUserInfo({...userInfo,age:e.target.value})} />
        <input type="text" placeholder='Enter your hobby' onChange={(e)=>setUserInfo({...userInfo,hobby:e.target.value})} />

        </form>
    </div>
  )
}

export default Profile