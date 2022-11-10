
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PrivateRaute from '../../../routers/privaterature/PrivateRaute';
import GoodDetails from './gooddetails/GoodDetails';

const Goods = () => {
    const [products, setproducts] = useState([])

    useEffect(() => {
        fetch('https://green-ven-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])

    return (
        <div>
            <h1 className='text-center text-6xl mb-12 mt-12'>All Products</h1>

            <div className='grid grid-cols-3 gap-4'>

                {

                    products.map(product => <PrivateRaute><GoodDetails key={product._id} product={product}></GoodDetails></PrivateRaute>)
                }
            </div>
            <Link to='/product'><button className="btn btn-outline btn-warning ml-80">Shop More</button></Link>

        </div>
    );
};

export default Goods;