import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ProductsDetails = ({ product }) => {
    console.log(product)
    const { _id, service_name, service_image, price, service_description } = product
    return (
        <div >

            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row">

                    <PhotoProvider>
                        <div className="foo">
                            <PhotoView key={_id} src={service_image} >
                                <img src={service_image} className="w-80 rounded-lg shadow-2xl" />
                            </PhotoView>

                        </div>
                    </PhotoProvider>



                    <div>
                        <h1 className="text-5xl font-bold">{service_name}</h1>


                        <p className="py-6">{service_description}</p>
                        <h2 className='text-yellow-500 mb-20 font-bold'>Price:{price}Tk/KG</h2>


                        <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Get Started</button>  </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;