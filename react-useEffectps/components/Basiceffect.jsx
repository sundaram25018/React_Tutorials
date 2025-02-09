import React, { useEffect, useState } from 'react'

const Basiceffect = () => {
  useEffect(()=>{
       console.log("this is rendering")
  },[])
  return (
    <div>
      <h1>Check the console </h1>
    </div>
  )
}

export default Basiceffect
