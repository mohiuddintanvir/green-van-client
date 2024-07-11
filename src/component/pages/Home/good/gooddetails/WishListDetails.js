import React from 'react';

const WishListDetails = ({ value }) => {
  const { img, name, prices, quantity } = value;
  
  return (
    <div className="flex justify-center">
      <div className="overflow-x-auto">
        <table className="table w-[70rem] text-white">
          {/* head */}
          <thead>
            <tr className="grid lg:grid-cols-4 font-[700] font-Poppins">
              <th></th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="grid lg:grid-cols-4 grid-cols-1 font-Lato">
              <td><img src={img} className="w-20 h-20" alt="" /></td>
              <td className="hover:text-[#1ad458]">{name}</td>
              <td className="hover:text-[#1ad458]">{quantity} KG</td>
              <td className="hover:text-[#1ad458]">{prices}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WishListDetails;
