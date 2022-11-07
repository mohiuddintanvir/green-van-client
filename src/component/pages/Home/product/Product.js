import React from 'react';
import img1 from '../../../../Images/homeimg/img-1.jpg'

const Product = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img1} className="max-w-3xl rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">The Largest Crop Ever!</h1>
                        <p className="py-6">Smells racy free announcing than durable zesty smart exotic far feel. Screamin' affordable secret way absolutely.

                            Stimulates vast a real proven works discount secure care. Market invigorate a awesome handcrafted bigger comes newer recommended lifetime.

                            Stimulates vast a real proven works discount secure care. Market invigorate a awesome handcrafted bigger comes newer recommended lifetime. Evulates vast a real proven works discount secure care. Market invigorate a awesome handcrafted bigger comes newer recommended lifetime. Odor to yummy high racy bonus soaking mouthwatering. First superior</p>
                        <button className="btn btn-outline btn-warning">Find Out More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;