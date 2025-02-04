import React from 'react'

const UserStatus = (props) => {
  if(props.islogged && props.Admin){
         return <h1>Admin is logged In</h1>
  }
  else if(props.islogged && !props.Admin){
      return <h1>Admin is not logged in</h1>
  }
  else{
    return <h1>User is not logged in</h1>
  }
}

export default UserStatus
