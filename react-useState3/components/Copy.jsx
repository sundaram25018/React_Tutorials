import React, { useState } from 'react'
import Popup from './Popup'

const Copy = () => {
  const [InputValue,setInputValue] = useState('')
  const [copied,setcopied] = useState(false)

  const handleCopy = () =>{
    navigator.clipboard.writeText(InputValue).then(()=>{
      setcopied(true);
      setTimeout(() => setcopied(false),5000)
    })
  }

  return (
    <div>
      <input type="text" value={InputValue} onChange={e => setInputValue(e.target.value)} />
      <button onClick={handleCopy}>Copy</button>
      <Popup copied={copied}/>
    </div>
  )
}

export default Copy
