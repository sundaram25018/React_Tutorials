import React, { useState } from 'react'
import '../style.css'
import { FaSearch } from "react-icons/fa";

const Searchicon = () => {
  const [showInput,setshowInput] = useState(false)
  const [bgColor,setbgColor] = useState("white")

  const handleClick = (e) => {
    setbgColor("#1a1a1a");
    if (e.target.className === "container") {
      setshowInput(false);
      setbgColor("#fff");
    }
  };


  return (
    <section className='container' style={{backgroundColor:bgColor}} onClick={handleClick}>
      {showInput ? (
        <input type="text" placeholder='Search..' />
      ):(<FaSearch onClick={()=>setshowInput(true)}/>)}
    </section>
  )
}

export default Searchicon
