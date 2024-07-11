import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Usetitle from "../../../../hocks/Usetitle";

const OrderRow = ({ order, handledelete, handlestatusupdate }) => {
  const {
    id,
    _id,
    customer,
    img,
    name,
    prices,
    email,
  } = order;

  const [orderid, setorderid] = useState([]);

  useEffect(() => {
    fetch(`https://green-ven-server.vercel.app/services/${id}`)
      .then((res) => res.json())
      .then((data) => setorderid(data));
  }, [id]);

  Usetitle("Give review");

  return (
    <tr className="border-b hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap" colSpan="4">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-20 w-20">
            <img
              className="h-20 w-20 rounded-lg object-cover"
              src={img}
              alt="Product Image"
            />
          </div>
          <div className="ml-4">
            <div className="text-lg font-medium text-gray-900">{name}</div>
            <div className="text-sm text-gray-500">{email}</div>
          </div>
        </div>
        <div className="mt-4">
          <div className="text-sm text-gray-500">
            <span className="font-semibold">Customer: </span>{customer}
          </div>
          <div className="text-sm text-gray-500">
            <span className="font-semibold">Price: </span>Tk {prices}
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => handledelete(_id)}
            className="bg-[#1ad458] hover:bg-yellow-600 text-white py-1 px-3 rounded-md"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default OrderRow;
