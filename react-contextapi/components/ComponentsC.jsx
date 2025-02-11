import React from 'react'
import { Data, Data1} from '../src/App'
import { useContext } from 'react'

const ComponentsC = () => {
  const userName = useContext(Data)
  const Age = useContext(Data1)

  return (
    // <Data.Consumer>
    //   {/* {(name) => {
    //     return <h1>{name}</h1>
    //   } } */}
    // </Data.Consumer>
    <h1>UserName : {userName} and I'm Age: {Age}</h1>
  )
}

export default ComponentsC
