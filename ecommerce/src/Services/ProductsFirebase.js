import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import characters from '../Data/Products.json';

const ProductsFirebase = async () => {
    try {    
        characters.forEach(async (character) => {
            const docRef = await addDoc(collection(db, "products"), {
                name: character.name,
                price: 2000,
                species: character.species,
                image: character.image,
                quantity: 50,
                status: character.status,
                gender: character.gender,
            });
            console.log("Document written with ID: ", docRef.id);
        })
    } catch (error) {
        console.log(error)
    }
}

export default ProductsFirebase; 