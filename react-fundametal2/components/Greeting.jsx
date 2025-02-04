import React from 'react'

const Greeting = (props) => {
  return  props.time == "morning" ? <h1>It is morning</h1> : <h1>It is not morning</h1>
}

export default Greeting
