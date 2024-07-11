import React, { useContext } from 'react';
import Usetitle from '../../../hocks/Usetitle';
import { AuthContext } from '../../Context/Authprovider/Authprovider';

const AddProduct = () => {
    Usetitle('AddProduct');
    const { user } = useContext(AuthContext);

    const handleorder = (event) => {
        event.preventDefault();
        const form = event.target;
        const Name = `${form.firstname.value}`;
        const price = form.price.value;
        const date = form.date.value;
        const photourl = form.photourl.value;
        const description = form.comment.value;

        console.log(Name, price, photourl, description);

        const Addservice = {
            name: Name,
            img: photourl,
            price,
          
            service_date: date,
        };

        fetch('https://green-ven-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(Addservice),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    alert('Product added successfully');
                    form.reset();
                }
                console.log(data);
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
            <form
                className="max-w-4xl w-full bg-white shadow-md rounded-lg p-6 lg:p-10"
                onSubmit={handleorder}
            >
                <h1 className="text-2xl font-bold text-center mb-6">Add New Product</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <input
                        name="firstname"
                        type="text"
                        placeholder="Product name"
                        className="input input-ghost w-full input-bordered"
                    />
                    <input
                        name="price"
                        type="text"
                        placeholder="Price"
                        className="input input-ghost w-full input-bordered"
                    />
                    <input
                        name="photourl"
                        type="text"
                        placeholder="Your photo URL"
                        className="input input-ghost w-full input-bordered"
                        required
                    />
                    <input
                        name="email"
                        type="text"
                        placeholder="Your email"
                        defaultValue={user?.email}
                        className="input input-ghost w-full input-bordered"
                        readOnly
                    />
                    <textarea
                        name="comment"
                        className="textarea textarea-bordered h-24 w-full"
                        placeholder="Share your review about the product"
                        required
                    ></textarea>
                    <input
                        type="date"
                        id="start"
                        name="date"
                        className="input input-ghost w-full input-bordered"
                        min="2022-01-01"
                        max="2025-12-31"
                    />
                    <input
                        className="btn btn-primary w-full mt-4 lg:col-span-2"
                        type="submit"
                        value="Add Product"
                    />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
