import React, { useEffect, useState } from 'react';
import GoodDetails from './gooddetails/GoodDetails';

const Goods = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://green-ven-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='flex flex-col justify-center items-center min-h-screen w-full' id='shop'>
            <h1 className='text-center text-4xl text-white font-Poppins font-bold mb-10'>All Products</h1>
            <div className='grid lg:grid-cols-3 gap-5'>
                {products.map(product => (
                    <GoodDetails key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Goods;
