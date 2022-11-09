import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../Context/Authprovider/Authprovider';

const CheckOut = () => {
    const { _id, service_name, price } = useLoaderData();
    const { user } = useContext(AuthContext)

    // order athintication
    const handleorder = event => {
        event.preventDrfault();
        const form = event.target;
        const Name = `${form.firstname.value} ${form.lastname.value}`;
        const email = user?.email || "Please login first";
        const phonenumber = form.phonenumber.value;
        const comment = form.comment.value;

        const order = {
            id: _id,
            productname: service_name,
            price,
            customer: Name,
            email,
            phonenumber,
            comment

        }


    }





    return (

        <div>
            <form onSubmit={handleorder}>
                <h2 className='text-2xl'>You are gpoing to order:{service_name}</h2>
                <h4 className="text-3xl">Price:{price}/KG</h4>
                <div className='grid grid-cols-2 lg:grid-cols-2 gap-4'>
                    <input name='firstname' type="text" placeholder="First name" className="input input-ghost  w-full input-bordered " />
                    <input name='lastname' type="text" placeholder="last name" className="input input-ghost w-full input-bordered " />
                    <input name='phonenumber' type="text" placeholder="your phone number" className="input input-ghost w-full input-bordered " />
                    <input name='email' type="text" placeholder="your email" defaultValue={user?.email} className="input input-ghost w-full input-bordered " readOnly />

                </div>
                <textarea name='comment' className="textarea textarea-bordered h-24 w-full" placeholder="Your massage"></textarea>
                <input className='btn' type="submit" value=" Order Please" />
            </form>
        </div>


    );
};

export default CheckOut;