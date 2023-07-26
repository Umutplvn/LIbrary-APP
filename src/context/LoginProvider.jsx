import { createContext, useState } from "react";

export const memory = createContext()


const LoginProvider = ({children})=>{

const[user, setUser]=useState({username:"", password:""})

return(
  <memory.Provider value={{user, setUser}} >{children}</memory.Provider>
)

}

export default LoginProvider



