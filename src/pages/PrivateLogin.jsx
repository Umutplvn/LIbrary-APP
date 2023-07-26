import React, { useContext } from 'react'
import { memory } from '../context/LoginProvider'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateLogin = () => {
  const {user}=useContext(memory)  


  return (
    user?.password && user?.username ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateLogin