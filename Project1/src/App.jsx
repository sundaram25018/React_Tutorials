import React from 'react'
import Todo from './components/Todo'
import Meals from './components/Meals'
import Calculator from './components/Calculator'
import ToggleColor from './components/ToggleColor'
import Searchicon from './components/Searchicon'
import Testimonials from './components/Testimonials'
import Accodian from './components/Accodian'
import { accordionData } from './Accodion_data'
// import Counter from './components/Counter'


const App = () => {
  return (
    <div>
      {/* <Counter/> */}
      {/* <Todo/> */}
      {/* <Meals/> */}
      {/* <Calculator/> */}
      {/* <ToggleColor/> */}
      {/* <Searchicon/> */}
      {/* <Testimonials/> */}
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accodian title={title} content={content} />
        ))}
      </div>
    </div>
  )
}

export default App
