import React, { useState } from 'react'

const App = () => {
  const [tasks,settasks] = useState([]);
  const [task,settask] = useState("");

  const addTask = ()=>{
    if(task.trim()){
      settasks([...tasks,task]);
      settask("");
    }
  };

  const deleteTask=(index)=>{
    settasks(tasks.filter((_,i)=>i !== index));
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>TODO List</h1>
      <input type="text" value={task} onChange={(e)=>
        settask(e.target.value)
      } placeholder='Enter your task' style={{width:"300px", height:"35px",border:"2px solid gray", borderRadius:"3px" }}/>
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}  style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "250px",
            margin: "10px auto",
            padding: "5px",
           
            
          }}>
            <span>{t}</span> <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
