import React from "react";
import img1 from "../../../../Images/homeimg/img-1.jpg";

const Product = () => {
  return (
    <div>
      <div className="hero   p-20">
        <div className="hero-content flex-col lg:flex-col">
          <img className="w-90" src={img1} alt="" />
          <div>
            <h1 className="text-5xl  ">The Largest Crop Ever!</h1>
            <p className="py-6">
              Smells racy free announcing than durable zesty smart exotic far
              feel. Screamin' affordable secret way absolutely. Stimulates vast
              a real proven works discount secure care. Market invigorate a
              awesome handcrafted bigger comes newer recommended lifetime.
              Stimulates vast a real proven works discount secure care. Market
              invigorate a awesome handcrafted bigger comes newer recommended
              lifetime. Evulates vast a real proven works discount secure care.
              Market invigorate a awesome handcrafted bigger comes newer
              recommended lifetime. Odor to yummy high racy bonus soaking
              mouthwatering. First superior.
            </p>
            <div className="lg:ml-96">

               <button className="btn btn-outline btn-warning w-1/2">
              More
            </button>
            </div>
           
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Product;
