import React from "react";
import NavBar from "../NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const Root = () => {
  return (
    <> 
      <NavBar />
      <h1>Catalogo de Personajes listo para entrega: </h1>
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
