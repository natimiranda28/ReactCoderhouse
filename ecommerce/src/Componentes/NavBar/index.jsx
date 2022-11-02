import Nav from "react-bootstrap/Nav";
import React from "react";
import "./style.css";
import CartWidget from "../CartWidget";


const NavBar = () => {
  return (
    <>
      <h1>Libreria Tita!</h1>
      <Nav class="nav-barra">
        <Nav.Item class="elem-lista">
            <CartWidget/>
        </Nav.Item>
        <Nav.Item class="elem-lista">
            <Nav.Link href="#">Inicio</Nav.Link>
        </Nav.Item>
        <Nav.Item class="elem-lista">
            <Nav.Link href="https://youtube.com">Contactos</Nav.Link>
        </Nav.Item>
        <Nav.Item class="elem-lista">
            <Nav.Link href="https://instagram.com">Carrito</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};
export default NavBar;
