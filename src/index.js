// import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/SignUp/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profile } from "./pages/Profile/Profile";
import { Home } from "./pages/Home/Home";
import { Friends } from "./pages/Friend/Friends";
import { Watch } from "./pages/Watch/Watch";
import { Marketplace } from "./pages/Marketplace/Marketplace";
import { Groups } from "./pages/Groups/Groups";
import { Navbar } from "./components/Navbar";
import { LeftHamburger } from "./components/LeftHamburger";
import { RightHamburger } from "./components/RightHamburger";
import { Gaming } from "./pages/Gaming/Gaming";
import { ProtectedRoutes } from "./components/ProtectedRoutes";


const root = ReactDOM.createRoot(document.getElementById("root"));

const RootRoute = () => {

  // const isNavigationsActive = useRef(false)

  const [isNavigationsActive, setIsNavigationsActive] = useState(false);


  const handleNavigations = (data) => {
    setIsNavigationsActive(data);
  };

  return (
    <BrowserRouter>
      {isNavigationsActive && <Navbar handleNavigations={handleNavigations} />}
      {isNavigationsActive && <LeftHamburger />}
      {isNavigationsActive && <RightHamburger />}
      <Routes>
        <Route path="/" element={<ProtectedRoutes Component={<Home />} handleNavigations={handleNavigations} />} />
        <Route path="/login" element={<ProtectedRoutes Component={<Login handleNavigations={handleNavigations} />} route={""} handleNavigations={handleNavigations} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<ProtectedRoutes Component={<Profile />} route={"profile"} handleNavigations={handleNavigations} />} />
        <Route path="/friends" element={<ProtectedRoutes Component={<Friends />} route={"friends"} handleNavigations={handleNavigations} />} />
        <Route path="/watch" element={<ProtectedRoutes Component={<Watch />} route={"watch"} handleNavigations={handleNavigations} />} />
        <Route path="/marketplace" element={<ProtectedRoutes Component={<Marketplace />} route={"marketplace"} handleNavigations={handleNavigations} />} />
        <Route path="/gaming" element={<ProtectedRoutes Component={<Gaming />} route={"gaming"} handleNavigations={handleNavigations} />} />
        <Route path="/groups" element={<ProtectedRoutes Component={<Groups />} route={"groups"} handleNavigations={handleNavigations} />} />
      </Routes>
    </BrowserRouter>

  )
}


root.render(
  <React.StrictMode>
    <RootRoute />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
