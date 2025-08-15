import React, { Component } from "react";
// import  axios  from "axios";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/login";
import Home from "./Components/Home";
function App() {
  return <>
    
       <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
}

export default App;
