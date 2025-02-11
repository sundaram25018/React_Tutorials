import React, { useState } from 'react'
import "../style.css"

const Counter = () => {
  const [Count,setCount] = useState(0);

 const Increment = ()=>{
     setCount(Count+1);
  }
  const Decrement = ()=>{
    setCount(Count-1);
 }

  return (
    <div className='container'>
      <div>
        <h1 className="number">{Count}</h1>
      </div>
      <div className="btns-container">
        <button className='increment' onClick={Increment}>+</button>
        <button className='increment' onClick={Decrement}>-</button>
      </div>
    </div>
  )
}

export default Counter
