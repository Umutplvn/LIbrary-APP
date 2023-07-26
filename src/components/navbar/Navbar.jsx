import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { memory } from "../../context/LoginProvider";
import { themeProvider } from "../../context/ThemeProvider";


const Footer = () => {
  const { user, setUser } = useContext(memory);
  
  const {icon}= useContext(themeProvider)

  return (

    <Navbar expand="lg" className={icon ? "bg-body-tertiary" : "bg-dark"}>
      <Container className="navbar">
        <Navbar.Brand className={icon ? "text-dark" : "text-light"} >LIBRARY APP</Navbar.Brand>
        <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav  className={icon ? "text-dark ms-auto butons " : "text-light ms-auto butons "}>
            <NavLink className={icon ? "linkTo" : "text-light linkTo"} to="/">HOME</NavLink>
            <NavLink className={icon ? "linkTo" : "text-light linkTo"} to="/about">ABOUT</NavLink>
            <NavLink className={icon ? "linkTo" : "text-light linkTo"} to="/register">REGISTER</NavLink>
    {user?.username && user?.password ?  <NavLink className={icon ? "linkTo" : "text-light linkTo"} to="/login"  onClick={()=>setUser({...user, username:"", password:""})}>LOGOUT</NavLink> :  <NavLink className={icon ? "linkTo" : "text-light linkTo "} to="/login"  >LOGIN</NavLink>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Footer;
