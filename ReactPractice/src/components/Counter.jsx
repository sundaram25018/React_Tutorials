import React, { useState } from 'react'

const Counter = () => {
  const [Count, setCount] = useState(0);

  const Increament=()=>{
    setCount(Count+1);
  }
  const Decrement=()=>{
    setCount(Count-1);
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
      <div className="flex gap-4">
      <h1 className="text-2xl font-bold mb-4">Counter APP</h1>
      <h2 className="text-4xl font-semibold mb-4">{Count}</h2>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" onClick={Increament}>+</button>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" onClick={()=>setCount(Count-1)}>-</button>
      <button className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600" onClick={()=>setCount(0)}>Reset</button>

    </div>
    </div>
    </div>
  )
}

export default Counter
