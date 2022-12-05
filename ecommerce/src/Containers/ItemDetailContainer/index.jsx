import React, { useEffect,useState } from "react";
import {useParams} from "react-router-dom"
import ItemDetail from "../../Componentes/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemDetailContainer = () => {

    const {id} = useParams()
    const [character, setCharacter] = useState(null)
    useEffect(() => {

        const getCharacterDetail = async () => {
            const docRef = doc(db, "products", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setCharacter({...docSnap.data(), id: docSnap.id})
            } else {
                console.log("No such document!");
            }
        }
        getCharacterDetail()
    }, [id])
    return (character ? <ItemDetail character={character}/> : <h1>Cargando...</h1> )
};
export default ItemDetailContainer;