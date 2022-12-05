import React, { useState } from "react";
import "./style.css";

const ItemCount = ({onAdd, stock, initial}) => {

    const [count, setCount] = useState(initial);

    const onPlus = () => {
        if (count < stock) setCount(count + 1)
    }

    const onDecrement = () => {
        if (count > initial) setCount(count - 1)
    }
    return <div className="contenedor">
        <button onClick={onDecrement}>-</button>
        <span>{count}</span>
        <button onClick={onPlus}>+</button>
        <button onClick={()=>onAdd(count)}>Confirmar Compra</button>
    </div>;
};

export default ItemCount;