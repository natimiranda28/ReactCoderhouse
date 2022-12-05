import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import GeneradorDeOrden from "./GeneradorDeOrden";

export const GuardaOrdenes = async (nombreComprador, telefono, email, products, total) => {
    try {
        const generatedOrder = GeneradorDeOrden(
            nombreComprador,
            email,
            telefono,
            products,
            total
        );

        const productOutOfStock = [];

        const productsInFirebase = [];
        
        for (const productInCart of products) {
            const docRef = doc(db, "products", productInCart.id);
            const docSnap = await getDoc(docRef);
            const productInFirebase = { ...docSnap.data(), id: docSnap.id };
            productsInFirebase.push(productInFirebase);
            if (productInCart.quantity > productInFirebase.quantity)
                productOutOfStock.push(productInCart);
        }

        console.log(productOutOfStock);
        console.log(productsInFirebase);

        if (productOutOfStock.length === 0) {
            console.log(products);
            for (const productInCart of products) {
                const productInFirebase = productsInFirebase.find(
                    (product) => product.id === productInCart.id
                );
                const productRef = doc(
                    db,
                    "products",
                    productInCart.id
                );
                await updateDoc(productRef, {
                    quantity:
                        productInFirebase.quantity -
                        productInCart.quantity,
                });
            }
            const docRef = await addDoc(
                collection(db, "orders"),
                generatedOrder
            );
            alert(
                `Se generó la order correctamente con ID: ${docRef.id}`
            );
        } else {
            let mensaje = "";
            for (const product of productOutOfStock) {
                const productInFirebase = productsInFirebase.find(
                    (productFirebase) => productFirebase.id === product.id
                );
                console.log(productInFirebase);
                mensaje += `${product.name}, stock disponible: ${productInFirebase.quantity}, cantidad pedida: ${product.quantity}\n`;
            }
            alert(`Hay producto/s fuera de stock: \n${mensaje}`);
        }
    } catch (error) {
        console.log(error);
    }
}