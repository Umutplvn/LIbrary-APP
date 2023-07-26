import React, { useContext } from "react";
import "./About.css";
import Navbar from "../../components/navbar/Navbar";
import userIcon from "../../assets/icon.png"
import { themeProvider } from "../../context/ThemeProvider";
import {AiOutlineInstagram, AiFillGithub} from "react-icons/ai"
import {AiOutlineLinkedin} from "react-icons/ai"
import { Link } from "react-router-dom";

const About = () => {
  const{icon}=useContext(themeProvider)
  return (
    <div>
      <Navbar />
      <div className={icon ? "about" : "about-active"}> 
      <img  className="user-icon" src={userIcon} alt="" />
      <p className="introduction container">
        I'm Umut, passionate full-stack developer skilled in React, Node.js, Express, and MongoDB. Created a dynamic web app with seamless state management using hooks. Thrive in collaborative environments and embrace new technologies. Excited to discuss project architecture, challenges, and decision-making. Lifelong learner transforming ideas into reality through code. Let's engage in full-stack development discussions.
      </p>
      <h3 className="note text-center">THIS ICON AND TEXT CREATED BY USING AI</h3>
     
      <div className="sm-icons">
     <Link to="https://www.instagram.com/umutpehlivan35/" className="text-dark sm-icon"> {icon ?  <AiOutlineInstagram className="fs-2" /> :  <AiOutlineInstagram className="text-light rounded-1 fs-2 " /> }</Link>
     <Link to="https://github.com/Umutplvn" className="text-dark sm-icon"> {icon ?  <AiOutlineLinkedin className="fs-2" /> :  <AiOutlineLinkedin className="text-light rounded-1 fs-2 " /> } </Link>
     <Link to="https://www.linkedin.com/in/umut-pehlivan-817b28174/" className="text-dark sm-icon"> {icon ?  <AiFillGithub className="fs-2" /> :  <AiFillGithub className="text-light rounded-1 fs-2" /> }</Link>
      </div>
      </div>
    </div>
  );
};

export default About;
