import React, { useState } from 'react'

const Example1 = () => {
  const [Count,setCount] = useState(()=>{const initialCount = 10; return initialCount});

  const increment = () =>{
    setCount((prevount)=> prevount+1)}
  return (
    <div>
      <h1>count: {Count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Example1
