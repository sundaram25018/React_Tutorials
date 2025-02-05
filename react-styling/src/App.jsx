import React from 'react'
import { FaBeer } from "react-icons/fa";
import { DiBitbucket } from "react-icons/di";
import StyleCard from '../components/StyleCard';
import ProfilCard from '../components/ProfilCard';

function App() {
  const style = {color:'blue',backgroundColor:'teal',padding:"2rem"}
  return (
    <div>
      {/* <h1 style = {style}>Hello World run </h1> */}
   
      <h2><FaBeer/></h2>
      <DiBitbucket />
      <StyleCard/>
      <ProfilCard/>
    </div>
  )
}

export default App
