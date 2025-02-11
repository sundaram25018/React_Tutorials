import React, { useRef } from 'react'

const FocusInput = () => {
  const  inputRef = useRef(null)
  return (
    <div>
      <input type="text" ref={inputRef} placeholder='click the buttom' />
      <button>Focus input</button>
    </div>
  )
}

export default FocusInput
