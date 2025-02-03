import React from 'react'

const UserList = () => {
  const Userinfo = [
    {Name: 'John', Age:24, Gender: 'male'},
    {Name: 'Alex', Age:34, Gender: 'male'},
    {Name: 'Smithi', Age:26, Gender: 'female'}
  ]
  return (
    <div>
      {Userinfo.map((Userinfo)=>(
         <div key={Math.random()}>
          <h2>Name:{Userinfo.Name}</h2>
          <h2>Age:{Userinfo.Age}</h2>
          <h2>Gender:{Userinfo.Gender}</h2>
         </div>
      ))}
    </div>
  )
}

export default UserList
