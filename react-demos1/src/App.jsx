import React from 'react'
import Greet from '../components/Greet'
import Product from '../components/Product'
import UserList from '../components/UserList'

const App = () => {
  const myname = "Sundaram"
  const multiply = (a,b)=>a*b
  const specialclass = "special"
  const number = [1,2,3,4,5,6,7,8]
  const userInfo = [
    {
      Name : "Sundaram",
      Email : "sundaram@gmail.com",
      Location : "Surat"
    },
    {
      Name : "Virat",
      Email : "virat@gmail.com",
      Location : "Delhi"
    },
    {
      Name : "Mahesh",
      Email : "mahesh@gmail.com",
      Location : "vadodara"
    }
  ]
  return (
    <div>
      {/* <p>2+2</p>
      <p>{2+2}</p>
      <p>myname</p>
      <p>{myname}</p>
      <p>my Friend List : {["Raj ","Ravi ","Rahul ","Rohit"]}</p>
      <p>2 * 5 {multiply}</p>
      <p className={specialclass}>Class Name</p> */}

       {/* {number.map((number)=>(
            <ul key = {number}>
              <li>{number}</li>
            </ul>
       ))} */}

       {/* {userInfo.map((userInfo)=>(
         <ul key = {Math.random()}>

          <li>User : {userInfo.Name}</li>
          <li>Email : {userInfo.Email}</li>
          <li>Location : {userInfo.Location}</li>
         </ul>

       ))} */}

{/* {userInfo.map(({Name,Email,Location})=>(
         <ul key = {Math.random()}>

          <li>User : {Name}</li>
          <li>Email : {Email}</li>
          <li>Location : {Location}</li>
         </ul>

       ))} */}
       <UserList/>
       <Product/>
      {/* <Greet/>
      <Product/> */}
    </div>
  )
}

export default App

