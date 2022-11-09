import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import Main from "../layout/Main";
import CheckOut from "../pages/checkout/CheckOut";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Product from "../pages/product/Product";
import Signup from "../pages/Signup/Signup";
import PrivateRaute from "./privaterature/PrivateRaute";






const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/product',
                element: <PrivateRaute><Product></Product></PrivateRaute>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/SignUp',
                element: <Signup></Signup>
            },
            {
                path: '/checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)

            },
        ]
    }
]);



export default router;