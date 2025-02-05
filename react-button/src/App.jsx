import React from 'react'

const Hover = () =>{
  const handlehover = ()=> console.log("you are hover this msg")
 return <h1 onMouseMove={handlehover}>Please touch this</h1>
}

const Copy = () =>{
  const handlecopy = ()=> console.log("Stop copying my contant")
 return <p onCopy={handlecopy}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quod eum repellat aut eveniet eos est earum culpa perspiciatis? Perspiciatis quibusdam nobis repellendus accusantium hic! Magni iusto reprehenderit sequi esse?</p>
}
const Button = () =>{
  const handleclick = ()=> console.log("buttom is clicked here")
 return <button onClick={handleclick}>Click me </button>
}

const App = () => {
  return (
    <div>
      <Button/>
      <Copy/>
      <Hover/>
    </div>
  )
}
export default App;
