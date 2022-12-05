import React from "react";
import NavBar from "../NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const Root = () => {
  return (
    <> 
      <NavBar />
      <h1>Bienvenido a Impresiones 3D La Fuffy, a continuacion te presentamos el catalogo de figurines disponibles para compra directa! Todos elaborados con el mayor cuiado y atencion al detalle: </h1>
      <h1>Puedes sortear entre las categorillas de figurines Alienigenas y Humanos, que disfrutes tu estancia en la pagina:</h1>
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;