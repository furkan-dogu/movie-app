import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Navbar from "../components/Navbar";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MovieDetail from "../pages/MovieDetail";

const AppRouter = () => {
  return (
  <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/details/:id" element={<MovieDetail/>} />
    </Routes>
  </>
  )
};

export default AppRouter;
