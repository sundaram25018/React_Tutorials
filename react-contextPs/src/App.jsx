import React from 'react'
import UserProvider from './UserContext'
import UserProfile from '../components/UserProfile'

const App = () => {
  return (
    <div>
      <UserProvider>
        <UserProfile/>
      </UserProvider>
    </div>
  )
}

export default App
