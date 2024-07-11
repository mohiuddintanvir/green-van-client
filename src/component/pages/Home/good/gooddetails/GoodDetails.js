import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { FaPlus, FaMinus } from "react-icons/fa";
import './gooddetails.css';

import { AuthContext } from '../../../../Context/Authprovider/Authprovider';
import { useContext, useState } from 'react';

const GoodDetails = ({ product }) => {
  
  const { name, img, price } = product;
  const { user } = useContext(AuthContext);

  // Move hooks to the top level
  const [value, setValue] = useState(0);
  const [cartData, setCartData] = useState(null); // State to hold cart data
  const [error, setError] = useState(''); // State to hold error message

  const handleIncrease = () => {
    setValue(value + 1);
    setError(''); // Clear error message on valid input
  };

  const handleDecrease = () => {
    if (value > 0) {
      setValue(value - 1);
      setError(''); // Clear error message on valid input
    }
  };

  const handleAddToCart = () => {
    if (value === 0) {
      setError('Quantity must be greater than 0.');
      return;
    }

    const prices = price * value;
    const email = user.email;
    const data = { img, name, prices, email, quantity: value };
    
    fetch('https://green-ven-server-4mnt-i9urk3erk.vercel.app/wishlist', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => {
      setCartData(data);
      setError(''); // Clear error message on successful addition to cart
    })
    .catch(err => console.error('Error adding to cart:', err));
  }

  return (
    <div className='lg:h-screen'>
      <div className='text-white'>
        <div className="card card-compact w-96 bg-black shadow-xl">
          <figure><img src={img} className='h-80 w-full' alt={name} /></figure>
          <div className="card-body h-[12rem]">
            <div className='grid grid-cols-2'>
              <h2 className="text-lg font-[600] font-Poppins">{name}</h2>
              <div className="flex items-center ml-20">
                <div className="flex justify-between items-center w-[5rem] px-1 border border-gray-300 rounded-md">
                  <button
                    onClick={handleDecrease}
                    className="px-1 py-1 bg-red-500 text-white rounded-md hover:bg-red-700"
                  >
                    <FaMinus />
                  </button>
                  <div className="text-xl">{value}</div>
                  <button
                    onClick={handleIncrease}
                    className="px-1 py-1 bg-green-500 text-white rounded-md hover:bg-green-700"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
            <p className='font-Lato text-lg'>Price: {price}/kg</p>
            <div className="card-actions justify-end">
              <button
                onClick={handleAddToCart}
                className="btn bg-[#01812c] text-white hover:bg-white hover:text-[#01812c]"
              >
                Add to Cart
              </button>
            </div>
            {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodDetails;
