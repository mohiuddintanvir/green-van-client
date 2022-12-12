import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Usetitle from "../../../hocks/Usetitle";

const OrderRow = ({ order, handledelete, handlestatusupdate }) => {
  const {
    _id,
    customer,
    productname,
    price,
    email,
    phonenumber,
    id,
    comment,
    status,
  } = order;

  const [orderid, setorderid] = useState([]);

  useEffect(() => {
    fetch(`https://green-ven-server.vercel.app/services/${id}`)
      .then((res) => res.json())
      .then((data) => setorderid(data));
  }, [id]);

  Usetitle("Give review");

  return (
    <div className="">

<div className="card lg:w-96 bg-base-100 shadow-xl image-full">
  <figure> <div className="   ">
              {orderid?.service_image && (
                <img
                  src={orderid.service_image}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div></figure>
  <div className="card-body "> 
     <p className="text-center text-white font-bold">{email}</p>
  <p className="text-xl text-white "> Product Name: {productname}</p>
            <h2 className="text-lg text-white ">Quentity: {customer}</h2>
           
        
            <p className="text-lg text-white "> Price: Tk{price}</p>
            <p className="text-lg text-white "> Quality: {comment}</p>
            <div className="card-actions justify-between flex ">
                {/* <div><Link to={`/update/${_id}`}>
                <button    className="btn btn-outline btn-warning"> update</button>
              </Link></div> */}
              <div>
                <button
                onClick={() => handledelete(_id)}
                className="btn btn-outline btn-warning"
              >
                Delete
              </button>
              </div>
              
            </div>
  </div>
  
</div>







      <div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
           
          </figure>
          <div className="card-body">
           
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderRow;
