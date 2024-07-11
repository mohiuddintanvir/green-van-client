import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import Main from "../layout/Main";
import AddProduct from "../pages/Addproduct/AddProduct";
import Blog from "../pages/Blog/Blog";
import CheckOut from "../pages/checkout/CheckOut";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Product from "../pages/product/Product";
import Signup from "../pages/Signup/Signup";
import Update from "../pages/Update/Update";
import PrivateRaute from "./privaterature/PrivateRaute";
import WishList from "../pages/Home/good/gooddetails/WishList";
import DeshBoardLayout from "../layout/DeshBoardLayout";
import DeshBoard from "../pages/DeshBoard";

import User from "../pages/DeshBoardPages/users/User";
import Orders from "../pages/DeshBoardPages/orders/Orders";

// Import the ErrorPage component

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
                path: '/wishlist',
                element: <PrivateRaute><WishList></WishList></PrivateRaute>
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({ params }) => fetch(`https://green-ven-server.vercel.app/orders/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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
                loader: ({ params }) => fetch(`https://green-ven-server.vercel.app/services/${params.id}`)
            },
        ]
    },
    {
        path: '/deshboard',
        element: <PrivateRaute><DeshBoardLayout></DeshBoardLayout></PrivateRaute>,
        children: [
     
            {
                path:'/deshboard',
                element:<Orders></Orders>

            },
            {
                path: 'users',
                element: <User></User>
            },  
            {
                path: 'addproduct',
                element: <PrivateRaute><AddProduct></AddProduct></PrivateRaute>,
            },
        ]
    }
]);

export default router;
