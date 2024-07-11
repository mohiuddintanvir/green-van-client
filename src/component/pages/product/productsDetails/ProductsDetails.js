import React from "react";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ProductsDetails = ({ product }) => {
  console.log(product);
  const { _id, service_name, service_image, price, service_description } =
    product;
  return (
    <div>
      <div className="card card-compact lg:w-96 bg-base-100 shadow-xl">
        <figure>
          <PhotoProvider>
            <div className="foo w-50">
              <PhotoView key={_id} src={service_image}>
                <img
                  src={service_image} alt=""
                  className="h-60  rounded-lg shadow-2xl"
                />
              </PhotoView>
            </div>
          </PhotoProvider>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-5xl font-bold">{service_name}</h2>
          <p> Price:{price}Tk/KG</p>
          <p className="py-6 lg:hidden">{service_description}</p>

          <div className="card-actions justify-end">
            <Link to={`/checkout/${_id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
