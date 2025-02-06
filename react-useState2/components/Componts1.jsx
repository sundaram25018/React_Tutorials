import React from 'react'

const Componts1 = ({Count,onClickHandler}) => {

const handleclick = () => onClickHandler()
  return (
    <div>
      <button onClick={handleclick}>Increment</button>
    </div>
  )
}

export default Componts1
