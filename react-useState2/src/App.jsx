import React, { useState } from 'react'
import Components2 from '../components/Components2'
import Componts1 from '../components/Componts1'
import Example1 from '../components/Example1'
import Example2 from '../components/Example2'
import Example3 from '../components/Example3'
import TodoList from '../components/TodoList'
import Profile from '../components/Profile'

const App = () => {
  const [Count,setCount] = useState(0)
  return (
    <div>
      <Componts1 Count = {Count} onClickHandler = {() => setCount(Count+1)}/>
      <Components2 Count = {Count} onClickHandler = {() => setCount(Count-1)}/>

        <Example1/>
        <Example2/>
        <Example3/>
        <TodoList/>
        <Profile/>
    </div>
  )
}

export default App
