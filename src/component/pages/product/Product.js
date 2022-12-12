import React, { useEffect, useState } from 'react';
import Usetitle from '../../../hocks/Usetitle';
import ProductsDetails from './productsDetails/ProductsDetails';

const Product = () => {

    Usetitle('products')
    // data call from mongo db
    const [products, setproducts] = useState([])

    useEffect(() => {
        fetch('https://green-ven-server.vercel.app/services?limit=100')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])





    return (
        <div>
            <h1 className=' text-center font-bold text-6xl mb-12 mt-16'>All Products</h1>

            <div className='grid lg:grid-cols-3 gap-2  lg:ml-24 '>

                {

                    products.map(product => <ProductsDetails key={product._id} product={product}></ProductsDetails>)
                }
            </div>



        </div>


    );
};

export default Product;