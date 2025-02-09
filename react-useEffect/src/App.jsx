import React, { useEffect, useState } from 'react'

const App = () => {
  // const [value,setvalue] = useState(0)
  
  // useEffect(() =>{
  //   console.log("use Call effect")
  //   document.title = `${value}`
  // },[]);
   

  const [data,setdata] = useState([])
  
  useEffect(() =>{
    console.log("use Call effect")
    async function getData(){
           const response = await fetch("https://jsonplaceholder.typicode.com/todos")
          const val = await response.json()
          if(val && val.length) setdata(val)
    }
  getData();
},[]);
  return(
    <div>
      <ul>
       {data.map(todo => (
        <li key = {todo.id}>{todo.title}</li>
       ))}
      </ul>
    </div>
  )
}

export default App
