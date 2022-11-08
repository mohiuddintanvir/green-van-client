import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import Main from "../layout/Main";
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
        ]
    }
]);



export default router;