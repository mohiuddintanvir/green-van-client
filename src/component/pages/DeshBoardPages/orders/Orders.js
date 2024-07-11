import React, { useContext, useEffect, useState } from 'react';
import Usetitle from '../../../../hocks/Usetitle';
import { AuthContext } from '../../../Context/Authprovider/Authprovider';
import OrderRow from './OrderRow';

const Orders = () => {
    Usetitle('Reviews');
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch(`https://green-ven-server-4mnt-fe9v87543.vercel.app/wishlist`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setOrders(data);
                setLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false); // Set loading to false in case of error
            }
        };

        fetchOrders();
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to cancel this order?');
        if (proceed) {
            fetch(`https://green-ven-server-4mnt-mttwc3p3n.vercel.app/wishlist?email=${user.email}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }
                })
                .catch(error => {
                    console.error('Error deleting order:', error);
                });
        }
    };

    return (
        <div>
            {loading ? (
                <p>Loading...</p> // Show loading indicator while data is being fetched
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4" id="order">
                    {orders.map(order => (
                        <OrderRow
                            key={order._id}
                            order={order}
                            handledelete={handleDelete}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Orders;
