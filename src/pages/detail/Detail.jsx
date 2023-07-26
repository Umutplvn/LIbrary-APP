import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import "./Detail.css"
import Navbar from "../../components/navbar/Navbar";
import { themeProvider } from '../../context/ThemeProvider';


const Detail = ({veri}) => {

const {icon}=useContext(themeProvider)
const {id}=useParams()
const kitap = veri.find((item) => item?.id === id)

  return (
    <div className={icon ? "main" : "main-active"} >
          <Navbar/>
    <div  className={ icon ? 'container text-center detail' : 'container text-center detail-active'}>
        <h3 className={!icon && "text-light" }>{kitap?.volumeInfo?.title}</h3>
        <img style={{width:"20%", margin:"auto" }} src={kitap?.volumeInfo?.imageLinks?.smallThumbnail} alt="" />
        <p  className= { !icon && "text-light"}>{kitap?.volumeInfo?.description ? kitap?.volumeInfo?.description : "Unfortunatelys we couldn't find description Info" }</p>
    </div>
    </div>
  )
}

export default Detail