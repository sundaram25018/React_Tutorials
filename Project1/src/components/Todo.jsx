import React, { useState } from 'react'
import "../style.css"

const Todo = () => {
  const [todo, settodo] = useState([])
  const [input,setinput] = useState('')

  const handleSubmit = (todo) => {
          settodo((todo) =>{
            return todo.concat({
              text:input,
              id:Math.floor(Math.random()*10)
            })
            setinput('')

          })
  }

  const removeTodo = (id) =>{
        settodo((todo)=> todo.filter((t) => t.id != id))
  } 
  return (
    <div className='container'>
      <input type="text" placeholder='Enter New Todo' value={input} onChange={(e) => setinput(e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>

      <ul className="todos-list">
        {todo.map(({text,id}) =>(
          <li className='todo' key={id}><span>{text}</span>
          <button className='close' onClick={()=>removeTodo(id)}>x</button>
          </li>
        ))}
      </ul>
      
    </div>
  )
}

export default Todo
