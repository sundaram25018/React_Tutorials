import React, { useEffect, useState } from 'react'

const Fatchdata = () => {
  const [post,setpost] = useState([])
  useEffect(() =>{
    const fetchData = async()=>{
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await response.json()
      setpost(data)
    }
     fetchData()
  },[])
  return (
    <div>
      <h1>Post Title</h1>
     <ul>
       {post.map(p => (
        <li key = {Math.random()} >{p.title}</li>
       ))}
      </ul>
    </div>
  )
}

export default Fatchdata
