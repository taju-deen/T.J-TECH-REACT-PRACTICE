import React from 'react'
import { useState,useEffect } from 'react'

const Fetchdata = () => {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        const collect=async()=>{
            const res=await fetch("https://jsonplaceholder.typicode.com/posts")
            const data=await res.json();
            setPosts(data)
        }
        collect()
    },[])
  return (
    <div>
        <h1>Fetchdata</h1>
        <div>
            
                {posts.map(post => (
                    <ul key={post.id}>
                        <li >{post.title}</li>
                        <li >{post.body}</li>
                    </ul>
                ))}
            
        </div>
    </div>
  )
}

export default Fetchdata