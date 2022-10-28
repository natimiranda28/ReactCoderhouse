import React from "react";
import "./style.css"

export default function ItemListContainer ({mensaje}){
    return(
        <div className="ItemList">
            <h1> Bienvenido a Libreria Tita! {mensaje} </h1>
        </div>
    )
}
