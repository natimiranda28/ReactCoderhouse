import React from "react";
import "./style.css";
import ItemList from "../../Componentes/ItemList";
import { useParams } from "react-router-dom";
import UsarFirebase from "../../Hooks/UsarFirebase";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [data, error, loading] = UsarFirebase(categoryId);

  return (
    <>
      {data.length && !loading && !error ? (
        <ItemList products={data} />
      ) : error ? (
        <h1>{error}</h1>
      ) : loading ? (
        <h1>Cargando...</h1>
      ) : null}
    </>
  );
}
