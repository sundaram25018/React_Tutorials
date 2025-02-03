import React from 'react'

const Greet = () => {
  const greet = "Welcome to my Shop"
  const date = new Date()
  return (
    <div>
      <h1>{greet}</h1>
      <h3>Date : {date.getDate()}</h3>
    </div>
  )
}

export default Greet
