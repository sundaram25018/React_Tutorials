import React from 'react'
import {useReducer} from 'react'
import Counter from '../components/Counter';

const initialState = {count:0};

const reducer = (state,action) =>{
  switch (action.type) {
    case 'increament':
      return {...state, count: state.count+1}
      case 'decreament':
        return {...state, count: state.count-1}
        case 'reset':
          return {...state, count: 0}
    default:
     return state;
  }
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count : {state.count}</h1>
      <button onClick={()=>dispatch({type:'increament'})}>+</button>
      <button onClick={()=>dispatch({type:'decreament'})}>-</button>
      <button onClick={()=>dispatch({type:'reset'})}>RESET</button>

      <Counter/>
    </div>
  )
}

export default App
