import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/card/Card"
import axios  from "axios";
import { themeProvider } from "../../context/ThemeProvider";



const Home = ({setVeri}) => {


const[search, setSearch] = useState("")
const[data, setData] = useState("" || [])
const [type, setType] = useState("all")
const [bg, setBg] = useState("d-show")
let key = "AIzaSyCcoWRkzQ5nRtrQr8u8FOQ0kx4lgcjvGMM"



const hadleSubmit =(e)=>{
  e.preventDefault()
  
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&printType=${type}&${key}`)
  .then(res => setData(res.data.items))

  setBg("d-none")
}

setVeri(data)
const {icon}= useContext(themeProvider)


  return (
    <div className={icon ? "home-active" : "home"}>
      <Navbar/>
      <h2 className={icon ? "header" : "header-active"}>BOOKS OR MAGAZINES</h2>
      <Form onSubmit={hadleSubmit} className="form">
        <Form.Group className="mb-3 search-bar" controlId="formSearch">
          <Form.Control  onChange={(e)=>setSearch(e.target.value)}  type="input" required  placeholder="Search..." />
          <Form.Select  onChange={(e)=>setType(e.target.value)} defaultValue={(e)=>e.target.value} aria-label="Default select example">
          <option  value="all" >All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </Form.Select>
        </Form.Group>
     <Button  className={icon ? "search-buton" : " search-buton-active"}variant="primary" type="submit">
        Search
      </Button> 
      </Form>
      <div className={bg}></div>
      <Card data={data}/>
    </div>
  );
};

export default Home;
