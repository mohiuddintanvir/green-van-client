import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setorder] = useState([]);

    // order url set 



    useEffect(() => {
        fetch(`https://green-ven-server.vercel.app/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setorder(data))

    }, [user?.email])


    // Update

    const handlestatusUpdate = id => {
        fetch(`https://green-ven-server.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(order => order._id !== id)
                    const approving = orders.find(order => order._id === id)
                    approving.status = 'Approved'
                    const editreview = [...remaining, approving];
                    setorder(editreview)

                }
            })
    }







    // handledelete
    const handledelete = id => {
        const proceed = window.confirm('Are you sure you want to cancel this order')
        if (proceed) {
            fetch(`https://green-ven-server.vercel.app/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {

                        const remaining = orders.filter(order => order._id !== id)
                        setorder(remaining);

                    }
                })

        }
    }

    return (
        <div>



            <div className=" w-full">
                <table className="table ">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <h2>Delete review</h2>


                                </label>

                            </th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Email</th>

                        </tr>
                    </thead>
                    <tbody className='w-screen'>


                        {
                            orders.map(order =>


                                <OrderRow

                                    key={order._id} order={order} handledelete={handledelete} handlestatusUpdate={handlestatusUpdate}


                                ></OrderRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;