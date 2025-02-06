import React, { useEffect, useState } from 'react'

const Example3 = () => {
  const [Name,setName] = useState(()=>{
    const saveName = localStorage.getItem("Name");
    return saveName ? JSON.parse(saveName) : "";
  })

  useEffect(()=>{
    localStorage.setItem("Name",JSON.stringify(Name))
  },[Name])
  const handleChange = (event) =>{
      setName(event.target.value);
  }
  const handleclear = () =>setName("");
  return (
    <div>
      <h1>Your Name : {Name}</h1>
      <input type="text" value={Name} onChange={handleChange} placeholder='Enter your Name'/>
      <button onClick={handleclear}>Clear Name</button>
    </div>
  )
}

export default Example3
