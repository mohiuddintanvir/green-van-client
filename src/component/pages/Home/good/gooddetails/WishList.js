import React, { useContext, useEffect, useState } from 'react';
import WishListDetails from './WishListDetails';
import Header from '../../../shared/header/Header';
import { AuthContext } from '../../../../Context/Authprovider/Authprovider';

const WishList = () => {
    const [value, setValue] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://green-ven-server-4mnt-mttwc3p3n.vercel.app/wishlist?email=${user.email}`)
            .then(res => res.json())
            .then(data => setValue(data))
            .catch(error => console.error('Error fetching wishlist:', error));
    }, [user.email]);

    return (
        <div className='flex justify-center'>
            <div className=' lg:w-screen lg:h-sacreen lg:mt-20'>
                {value.map((item, index) => (
                    <WishListDetails key={index} value={item} />
                ))}
            </div>
        </div>
    );
};

export default WishList;
