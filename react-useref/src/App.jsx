import React, { useRef } from 'react'
import FocusInput from '../components/FocusInput';

const App = () => {
  const inputElement = useRef(null)
  const focusInput = ()=>{
    inputElement.current.focus();
    inputElement.current.value = "HuXn"
  }
  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={()=>focusInput()}>Click here</button>
      <FocusInput/>
    </div>
  )
}

export default App
