import React from 'react'
import { createContext } from 'react'
import ComponentsA from '../components/ComponentsA';

export const Data = createContext();
export const Data1 = createContext();
const App = () => {
  const name = "Sundaram"
  const age = 34
  return (
    <div>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
        <ComponentsA/>
        </Data1.Provider>
      </Data.Provider>
    </div>
  )
}

export default App
