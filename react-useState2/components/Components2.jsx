import React from 'react'

const Components2 = ({Count,onClickHandler}) => {
  const handleclick = () => onClickHandler()
  return (
    <div>
     <p>{Count}</p>
     <button onClick={handleclick}>Decrement</button>
    </div>
  )
}

export default Components2
