import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navber from "../components/navber/Navber";

const RootLayout = () => {
  return <>
    <Header/>
    <Navber/>
    <Outlet/>
    <Footer/>
  </>
};

export default RootLayout;
