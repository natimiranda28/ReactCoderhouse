import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Componentes/Root";
import ItemDetailContainer from "../Containers/ItemDetailContainer";
import ItemListContainer from "../Containers/ItemListContainer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <h1>No encontrado</h1>,
        children: [
            {
                path: "/",
                element: <ItemListContainer />,
            },
            {
                path: "/category/:categoryId",
                element: <ItemListContainer />,
            },
            {
                path: "/detail/:id",
                element: <ItemDetailContainer/>,
            },
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;