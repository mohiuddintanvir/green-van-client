import React from 'react';
import Usetitle from '../../../hocks/Usetitle';
import PrivateRaute from '../../routers/privaterature/PrivateRaute';
import ProductsDetails from '../product/productsDetails/ProductsDetails';
import About from './About/About';

import Goods from './good/Goods';
import Product from './product/Product';
import Banner from './Bannar';


const Home = () => {
    Usetitle('Home')
    return (
        <div className=''>
            <Banner></Banner>
            <Goods></Goods>

            <About></About>
            <Product></Product>

        </div>
    );
};

export default Home;