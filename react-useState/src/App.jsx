import React, { useState } from 'react'

const App = () => {
  // const [Count,setCount] = useState(0);
  const [friend,setfriend] = useState(["Alex", "John", "Smith"]);
  const [movie,setmovie] = useState([{id:1,title:"Bahubali",rating:7},{id:2,title:"RRR",rating:9}]);

  const addfriend = () => setfriend([...friend, "Rogan"])
  const Removefriend = () => setfriend(friend.filter((f)=> f != "John"));
  const Updatefriend = () => setfriend(friend.map(f => f == "Alex"? "Alex pandey":f))


  const changeRating = () =>{
    setmovie({...movie,rating:5})
  }

  const changeTitle = () =>{
    setmovie(movie.map(m=>m.id== 1 ?{...movie,title:"Sprit"}:m))
  }
  

  // const increment = () => setCount(Count+1);
  // const decrement = () => setCount(Count-1);
  return (
    <div>
      {/* <h1>{Count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button> */}

      {friend.map((f)=>(
        <li key={Math.random()}>{f}</li>
      ))}
      <button onClick={addfriend}>Addfriend</button>
      <button onClick={Removefriend}>Removefriend</button>
      <button onClick={Updatefriend}>Updatefriend</button>


      <br />
      {movie.map((m)=>(
        <li key={Math.random()}>{m.title}</li>
      ))}
      <h1>{movie.title}</h1>
      <p>{movie.rating}</p>
      {/* <button onClick={changeRating}>Change Rating</button> */}
      <button onClick={changeTitle}>Change Title</button>
    </div>
  )
}

export default App
