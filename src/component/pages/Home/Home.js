import React from 'react';
import PrivateRaute from '../../routers/privaterature/PrivateRaute';
import ProductsDetails from '../product/productsDetails/ProductsDetails';
import About from './About/About';
import Banner from './Banner';
import Goods from './good/Goods';
import Product from './product/Product';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Goods></Goods>

            <About></About>
            <Product></Product>

        </div>
    );
};

export default Home;