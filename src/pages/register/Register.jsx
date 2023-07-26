import React, { useContext } from 'react'
import "./Register.css"
import Navbar from "../../components/navbar/Navbar";
import { themeProvider } from '../../context/ThemeProvider';


const Register = () => {
  const {icon}=useContext(themeProvider)

  return (
    <div className={icon ? 'gif': "gif-active"}>
      <Navbar/>
    </div>
  )
}

export default Register