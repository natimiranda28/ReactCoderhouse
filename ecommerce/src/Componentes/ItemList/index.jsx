import React from "react";
import Item from "../Item";
import './style.css';

//Se encarga de hacer el map con los productos
const ItemList = ({ products }) => {
    return (
        <div className="item-list-container">
            {products.map((product) => {
                return <Item key={product.id} product={product} />;
            })}
        </div>
    );
};

export default ItemList;