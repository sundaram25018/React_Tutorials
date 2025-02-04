import React from 'react'
import Weather from '../components/Weather'
import UserStatus from '../components/UserStatus'
import Greeting from '../components/Greeting'

// const ValidPassword = () => <h1>Valid Password</h1>
// const InvalidPassword = () => <h1>Invalid Password</h1>

// const Password = ({isValid}) =>{
//   //  if(isValid){
//   //   return <ValidPassword/>
//   //  }
//   //  return <InvalidPassword/>

//   return isValid ? <ValidPassword/> : <InvalidPassword/>
// }

// const App = () => {
//   return <section>
//     <Password isValid={false}/>
//   </section>
// }

// export default App

// const Card = () =>{
//   const items = ["Phone","Charger","Battery","Laptop","Earphone"];
//   return(
//   <div>
// <h1>Card</h1>
// {items.length > 0 && <h2>You have {items.length} items in your card</h2>}


// <ul>
//   <h2>Products</h2>
//   {items.map(item =>(
//     <li key={Math.random()}>{item}</li>
//   ))}
// </ul>

//   </div>
//   )
// }
// const App = () => {
//   return <Card/>
// }

// export default App



const App = () => {
  // return <Weather/>
  return( 
  <div>
    {/* <UserStatus islogged = {false} Admin = {false}/> */}
    <Greeting time = "Evening"/>
  </div>)
}

export default App
