import "./style/reset.css";
import Home from "./pages/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Detail from "./pages/detail/Detail";
import { useState } from "react";
import LoginProvider from "./context/LoginProvider";
import PrivateLogin from "./pages/PrivateLogin";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { HiSun } from "react-icons/hi";
import { themeProvider } from "./context/ThemeProvider";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const [veri, setVeri] = useState("");
  const [icon, setIcon] = useState(true);



  return (
    <themeProvider.Provider value={{ icon, setIcon }}>
      <LoginProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home setVeri={setVeri} />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />

            <Route path="about" element={<PrivateLogin />}>
              <Route path="" element={<About />} />
            </Route>

            <Route path="detail/:id" element={<PrivateLogin />}>
              <Route path="" element={<Detail veri={veri} />} />
            </Route>
              <Route path="*" element={<NotFound />} />

          </Routes>
          <button onClick={() => setIcon(!icon)}>
            {icon ? (
              <BsFillMoonStarsFill className="icon" />
            ) : (
              <HiSun className="sun" />
            )}
          </button>

          
        </BrowserRouter>
      </LoginProvider>
    </themeProvider.Provider>
  );
}

export default App;
