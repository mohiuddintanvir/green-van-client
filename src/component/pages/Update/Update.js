import React, { useState } from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Usetitle from '../../../hocks/Usetitle';
import { AuthContext } from '../../Context/Authprovider/Authprovider';

const Update = () => {
const storeuser = useLoaderData();
    Usetitle('Update Review')
    const {user}=useContext(AuthContext)

    


console.log("main data check",storeuser)



    const [users, setusers] = useState(storeuser)

console.log(users)
    const handleUpdateuser = event => {
        event.preventDefault();
        console.log(users)
        fetch(`https://green-ven-server.vercel.app/orders/${storeuser.id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    alert('user updated')


                }
               console.log(data);
            })





    }

    const handleinputchange = event => {
        const value = event.target.value;
        const field = event.target.Name;
        const newuser = { ...users }
        newuser[field] = value;
        setusers(newuser);


    }
    return (
        <div>
           

            <div>
                <h2>{storeuser._id}</h2>


                <form className='mr-20 mt-10 border-teal-400  mb-20 ml-20' onSubmit={handleUpdateuser}>
                    <h1 className='text-2xl font-bold text-white bg-black text-center pt-20'>Update Your review here</h1>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-20 border-teal-500 bg-black '>
                        <input onChange={handleinputchange} name='firstname' type="text" defaultValue={users.customer
} placeholder="First name" className="input input-ghost  w-full input-bordered " />

                        <input onChange={handleinputchange} name='phonenumber' type="text" defaultValue={storeuser.phonenumber} placeholder="your photourl" className="input input-ghost w-full input-bordered  " required />
                        <input onChange={handleinputchange} name='email' type="text" placeholder="your email" defaultValue={user?.email} className="input input-ghost w-full input-bordered " readOnly />
                        <textarea onChange={handleinputchange} name='comment' className="textarea textarea-bordered h-24 w-full " defaultValue={storeuser.comment} placeholder="Shere Your Review about product" required></textarea> <br />
                        <input className='btn ' type="submit" value=" Update" />
                    </div>

                </form>

            </div>
        </div>
    );
};

export default Update;