import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css';

const Item = ({product}) => {

  const navigate = useNavigate()

  const navigateDetail = () => {
    navigate(`/detail/${product.id}`)
  }
 
  return (
    <div onClick={navigateDetail} className="CardProduct">
      <img src={product.image} alt="modelo personaje"/>
      <h1>Nombre: {product.name}</h1>
      <h2>Precio: {product.price}</h2>
      <h2>Stock: {product.quantity}</h2>
    </div>
  )
}

export default Item