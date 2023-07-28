
import Navbar from "../../components/navbar/Navbar";
import "./Login.css";

import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { useContext } from "react";
import { memory } from "../../context/LoginProvider";
import { useNavigate } from "react-router-dom";
import { themeProvider } from "../../context/ThemeProvider";


const Login = () => {

const {user, setUser} = useContext(memory)
const navigate = useNavigate()

const {icon}=useContext(themeProvider)


const handleSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  for (let [key, value] of formData.entries()) {
    setUser({...user, key:value, value});
    navigate(-1)
  }
};

console.log(user);

return (
    <div  className={icon? "generel-active": "generel"}>
      <Navbar />

<Container className="login">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>USERNAME</Form.Label>
          <Form.Control
            type="text"
            placeholder="USERNAME"
            name="username"
          />
        </Form.Group>

        <Form.Group className="mb-3 password" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            required
          />
        </Form.Group>
        <Container className="text-center">
          <Button  variant="danger" type="submit" className="login-btn">
            Submit
          </Button>
        </Container>
      </Form>
    </Container>
    </div>
  );
};

export default Login;


// //? 2.yol

// import Navbar from "../../components/navbar/Navbar";
// import "./Login.css";
// import Container from "react-bootstrap/Container"
// import Button from "react-bootstrap/Button"
// import Form from "react-bootstrap/Form"
// import { useContext, useState } from "react";
// import { memory } from "../../context/LoginProvider";
// import { useNavigate } from "react-router-dom";
// import { themeProvider } from "../../context/ThemeProvider";


// const Login = () => {

// const {user, setUser} = useContext(memory)
// const navigate = useNavigate()

// const {icon}=useContext(themeProvider)


// const handleSubmit = (event) => {
//   event.preventDefault();
//   const formData = new FormData(event.currentTarget);
//   for (let [key, value] of formData.entries()) {
//     setUser({...user, username:value[0], password:value[1]});
//     navigate(-1)
//   }
// };


// const handleOk =(e)=>{
// e.preventDefault()
// setBilgi({...bilgi, kullaniciAdim:kullanici, sifrem:sifre})

// }


// const [kullanici, setKullanici] = useState("")
// const [sifre, setSifre] = useState("")
// const [bilgi, setBilgi]= useState({kullaniciAdim:"", sifrem:""})

// console.log(bilgi);

// return (
//     <div  className={icon? "generel-active": "generel"}>
//       <Navbar />

// <Container className="login">
//       <Form onSubmit={handleOk}>
//         <Form.Group className="mb-3" controlId="username">
//           <Form.Label>USERNAME</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="USERNAME"
//             name="username"
//             onChange={(e)=>setKullanici(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3 password" controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Enter your password"
//             name="password"
//             required
//             onChange={(e)=>setSifre(e.target.value)}
//           />
//         </Form.Group>
//         <Container className="text-center">
//           <Button  variant="danger" type="submit" className="login-btn">
//             Submit
//           </Button>
//         </Container>
//       </Form>
//     </Container>
//     </div>
//   );
// };

// export default Login;
