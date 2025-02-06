import React, { useState } from 'react'

const Example2 = () => {
  const [Random,setRandom] = useState(()=>Math.floor(Math.random()*100))
  const generate = () =>{
    const newnum = Math.floor(Math.random()*100)
    setRandom(newnum)
  }
  return (
    <div>
      <h1>Random : {Random}</h1>
      <button onClick={generate}>New Number</button>
    </div>
  )
}

export default Example2
