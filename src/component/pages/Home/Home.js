import React from 'react';
import About from './About/About';
import Banner from './Banner';
import Product from './product/Product';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Product></Product>

        </div>
    );
};

export default Home;