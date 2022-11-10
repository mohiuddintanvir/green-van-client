import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Usetitle from '../../../hocks/Usetitle';

const OrderRow = ({ order, handledelete, handlestatusUpdate }) => {
    const { _id, customer, productname, price, email, phonenumber, id, comment, status } = order;





    const [orderid, setorderid] = useState([])




    useEffect(() => {
        fetch(`https://green-ven-server.vercel.app/services/${id}`)
            .then(res => res.json())
            .then(data => setorderid(data))
    }, [id]);


    Usetitle('Give review')





    return (
        <div className=''>

            <tr >


                <th>
                    <label>
                        <button onClick={() => handledelete(_id)} className="btn btn-outline btn-warning">X</button>
                    </label>
                </th>
                <td >
                    <div className="flex items-center   space-x-3">
                        <div className="avatar pl-20">
                            <div className="mask mask-squircle  w-24 h-24">
                                {
                                    orderid?.service_image &&
                                    <img src={orderid.service_image} alt="Avatar Tailwind CSS Component" />}

                            </div>
                        </div>
                        <div className='pl-20' >
                            <div className="font-bold ">{customer}</div>
                            <div className="text-sm opacity-50"><img className='w-20 rounded-full' src={phonenumber} alt="" /></div>
                        </div>
                    </div>
                </td>
                <td className='pl-20'>
                    {productname}
                    <br />
                    <span className="badge badge-ghost badge-sm">Tk{price}</span>
                </td>
                <td className='pl-20'>{email}</td>
                <th>
                    <p>{comment}</p>
                </th>
                <th className='pl-20'>
                    <Link to={`/update/${_id}`}>
                        <button className="btn btn-ghost btn-xs"> Update</button>

                    </Link>


                </th>
            </tr>
        </div>
    );
};

export default OrderRow;