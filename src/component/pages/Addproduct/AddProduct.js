import React from 'react';
import { useContext } from 'react';
import Usetitle from '../../../hocks/Usetitle';
import { AuthContext } from '../../Context/Authprovider/Authprovider';

const AddProduct = () => {
    Usetitle('AddProduct')
    const {user}=useContext(AuthContext)

    const handleorder = event => {
        event.preventDefault();
        const form = event.target;
        const Name = `${form.firstname.value}`;
        const price = form.lastname.value
        const date = form.date.value
        const photourl = form.phonenumber.value;
        const discription = form.comment.value;

        console.log(Name, price, photourl, discription)

        const Addservice = {
            service_name: Name,
            service_image: photourl,
            price,
            service_description: discription,
            service_date: date,

        }


        // if (phonenumber.length > 10) {
        //     alert('phone number should be contain 10 numbers')
        // }


        fetch('https://green-ven-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Addservice)
        })



            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Product add  successfully')
                    form.reset()
                }
                console.log(data)
            })
            .catch(err => console.error(err))

    }









    return (
        <div>
            <form className='lg:mr-20 mt-10 border-teal-400 mb-20 lg:ml-20 w-full ' onSubmit={handleorder}>
                <h1 className='text-2xl font-bold text-white bg-black text-center pt-20'>Add New Product</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-20 border-teal-500 bg-black '>
                    <input name='firstname' type="text" placeholder="Product name" className="input input-ghost  px-8 w-full input-bordered " />
                    <input name='lastname' type="text" placeholder="Price" className="input input-ghost w-full input-bordered " />
                    <input name='phonenumber' type="text" placeholder="your photourl" className="input input-ghost w-full input-bordered  " required />
                    <input name='email' type="text" placeholder="your email" defaultValue={user?.email} className="input input-ghost w-full input-bordered " readOnly />
                    <textarea name='comment' className="textarea textarea-bordered h-24 w-full " placeholder="Shere Your Review about product" required></textarea> <br />
                    <input type="date" id="start" name="date"

                        min="2022-01-01" max="2025-12-31" />
                    <input className='btn ' type="submit" value=" Add Product" />
                </div>

            </form>
        </div>
    );
};

export default AddProduct;