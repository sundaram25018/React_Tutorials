import React, { useState } from 'react'

const TodoList = () => {
  const [Todo,setTodo] = useState([])
  const [Input,setInput] = useState("");

  const handleSubmit = e =>{
    e.preventDefault()

    if(Input.trim()){
      setTodo([...Todo, Input])
      setInput("")
    }
  }
  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={Input} onChange={handleChange} placeholder='Enter your text' />
        <button type='submit'>Add Todo</button>
      </form>

      <ul>
        {Todo.map((Todo, index) => (
          <li key={index}>{Todo}</li>
        ))}
        
      </ul>
    </div>
  )
}

export default TodoList
