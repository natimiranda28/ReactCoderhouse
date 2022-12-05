import React, { useContext } from "react";
import CartItem from "../../Componentes/CartItem";
import { Shop } from "../../Contexts/Shop";
import Form from "../../Componentes/Form";
import {GuardaOrdenes} from "../../Services/GuardaOrdenes"; 

const CartContainer = () => {
  const { products, calculateTotal } = useContext(Shop);

  const confirmPurchase = () => {
    (async () => {
      await GuardaOrdenes(
        "Natalia Miranda",
        4283489,
        "LG@mail.com",
        products,
        calculateTotal()
       )
    })();
};

  return (
    <div>
      {products.map((product) => {
        return <CartItem key={product.id} item={product} />;
      })}
      <Form></Form>
      <button className="btn btn-success p-3" onClick={confirmPurchase}>
        Confirmar compra
      </button>
    </div>
  );
};

export default CartContainer;
