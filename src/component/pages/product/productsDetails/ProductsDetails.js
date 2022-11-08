import React from 'react';

const ProductsDetails = ({ product }) => {
    console.log(product)
    const { service_name, service_image, price, service_description } = product
    return (
        <div >

            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row">
                    <img src={service_image} className="w-80 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{service_name}</h1>
                        <p className="py-6">{service_description}</p>


                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;