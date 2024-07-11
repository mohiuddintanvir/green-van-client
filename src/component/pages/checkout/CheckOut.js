import React, { useEffect, useState, useContext } from "react";

import { useLoaderData } from "react-router-dom";
import Usetitle from "../../../hocks/Usetitle";
import { AuthContext } from "../../Context/Authprovider/Authprovider";
import Allreview from "../allreview/Allreview";

const CheckOut = () => {
  Usetitle("give review");
  const { _id, service_name, service_image, price, service_description } =
    useLoaderData();
  const { user } = useContext(AuthContext);

  // order athintication
  const handleorder = (event) => {
    event.preventDefault();
    const form = event.target;
    const Name = `${form.firstname.value} ${form.lastname.value}`;
    const email = user?.email || "Please login first";
    const price = form.price.value;
    const comment = form.comment.value;
    const date = form.date.value;

    const order = {
      // id: _id,
      productname: service_name,
      price,
      customer: Name,
      email,
      price,
      comment,
      service_date: date,
    };
    console.log(order);

    // if (price.length > 10) {
    //     alert('phone number should be contain 10 numbers')
    // }

    fetch("https://green-ven-server.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("order get successfully");
          form.reset();
        }
        console.log(data);
      })
      .catch((err) => console.error(err));
  };

  // all reviews
  const [allreview, setAllreview] = useState([]);

  console.log(allreview);
  useEffect(() => {
    fetch(`https://green-ven-server.vercel.app/orders/${_id}`)
      .then((res) => res.json())
      .then((data) => setAllreview(data));
  }, [_id]);

  return (
    <div className="grid lg:grid-cols-2 gap-4 lg:mt-20 lg:mb-20 ">
      <div className="lg:ml-44 ml-4 ">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={service_image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{service_name}!</h2>
            <p className="text-yellow-400 text-xl">Product Price:{price}/Kg</p>
            <p>{service_description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" lg:ml-20  mb-10">
          <form className="lg:mr-20 lg:mt-10 w-full border-teal-400 " onSubmit={handleorder}>
            <h1 className="text-2xl font-bold text-white bg-black text-center pt-20">
              Please!Give you order
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-20 border-teal-500 bg-black ">
              <input
                name="firstname"
                type="text"
                placeholder="Product name"
                className="input input-ghost  w-full input-bordered "
              />
              <input
                name="lastname"
                type="text"
                placeholder="How much you want(Quentity)"
                className="input input-ghost w-full input-bordered "
              />
              <input
                name="price"
                type="text"
                placeholder="product price"
                className="input input-ghost w-full input-bordered  "
                required
              />
              <input
                name="email"
                type="text"
                placeholder="your email"
                defaultValue={user?.email}
                className="input input-ghost w-full input-bordered "
                readOnly
              />
              <textarea
                name="comment"
                className="textarea textarea-bordered h-24 w-full "
                placeholder="Shere Your any types of requirements "
                required
              ></textarea>
              <input
                type="date"
                id="start"
                name="date"
                min="2022-01-01"
                max="2025-12-31"
                required
              />
              <input
                className="btn  w-full bg-black "
                type="submit"
                value=" Give order"
                
              />
            </div>
          </form>
          <div className="grid grid-cols-1 gap-4 mt-5">
          {allreview.map((revi) => (
            <Allreview revi={revi}></Allreview>
          ))}
        </div>
        </div>
      </div>
      
    </div>
  );
};

export default CheckOut;
