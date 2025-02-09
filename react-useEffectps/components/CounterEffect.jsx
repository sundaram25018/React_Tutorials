import React, { useEffect, useState } from 'react'

const CounterEffect = () => {
  const [Count,setCount] = useState(0);
  useEffect(()=>{
    document.title = `Count : ${Count}`
  })
  return (
    <div>
      <h1>Count : {Count}</h1>
      <button onClick={()=>setCount(Count+1)}>Increament</button>
    </div>
  )
}

export default CounterEffect
