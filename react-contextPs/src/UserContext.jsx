import {createContext,useState } from "react";

const UserContext = createContext()

const UserProvider = ({children}) =>{
  const [user, setuser] = useState({name:"John"})
  const Update = (newName)=>{
  setuser({name:newName})
  }
  return <UserContext.Provider value={{user,Update}}>{children}</UserContext.Provider>

}
export {UserContext, UserProvider};