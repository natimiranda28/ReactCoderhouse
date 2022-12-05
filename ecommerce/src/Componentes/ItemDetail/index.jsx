import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../Contexts/Shop";
import ItemCount from "../ItemCount";
import "./style.css";

const ItemDetail = ({ character }) => {
  const { addProduct } = useContext(Shop);
  const [quantityItemDetail, setQuantityItemDetail] = useState(0);
  const navigate = useNavigate();

  const confirmPurchase = (quantity) => {
    addProduct({ ...character, quantity });
    setQuantityItemDetail(quantity);
  };

  const handleNavigate = () => {
    navigate("/cart");
  };

  return (
    <div className="item-detail">
      <h1>{character.name}</h1>
      <img src={character.image} width={450} alt="detail" />
      <h2>Precio: {character.price}</h2>
      <h2>Stock: {character.quantity}</h2>  
      {quantityItemDetail ? (
        <button onClick={handleNavigate}>Go cart</button>
      ) : 
        <ItemCount onAdd={confirmPurchase} initial={1} stock={character.quantity} />
      }
    </div>
  );
};

export default ItemDetail;