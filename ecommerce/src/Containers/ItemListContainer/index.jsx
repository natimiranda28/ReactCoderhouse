import React, {useEffect, useState} from 'react';
import './style.css';
import ItemList from '../../Componentes/ItemList';
import { useParams } from 'react-router-dom';

export default function ItemListContainer ({greeting}) {

    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    console.log(categoryId);

    useEffect(()=> {
        ( async ()=> {
            try {
                console.log(categoryId);
                let response;
                if (categoryId) {
                    response = await fetch(`https://rickandmortyapi.com/api/character/?species=${categoryId}`);
                } else {
                    response = await fetch(`https://rickandmortyapi.com/api/character`);
                }
                console.log(response);
                const data = await response.json();
                console.log(data);
                setProducts(data.results)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [categoryId])

    return (
        <>
            <ItemList products={products}/>
        </>
    )
}