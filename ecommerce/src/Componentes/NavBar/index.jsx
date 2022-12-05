import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import './style.css';

const NavBar = () => {
    return (
        <>
        <h1>Impresiones3D "La Fuffy"</h1>
        <ul className="nav-barra">
            <li className="elem-lista">
                <Link to="/">Home</Link>
            </li>
            <li className="elem-lista">
                <Link to="/category/human">Human</Link>
            </li>
            <li className="elem-lista">
                <Link to="/category/alien">Alien</Link>
            </li>
            <li className="elem-lista">
            <CartWidget />
            </li>
        </ul>
        </>
        
    );
};

export default NavBar;