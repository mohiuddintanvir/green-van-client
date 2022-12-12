import React, { useContext, useEffect, useState } from 'react';
import Usetitle from '../../../hocks/Usetitle';
import { AuthContext } from '../../Context/Authprovider/Authprovider';
import OrderRow from './OrderRow';

const Orders = () => {

    Usetitle('Reviews')

    const { user } = useContext(AuthContext);
    const [orders, setorder] = useState([]);

    // order url set 



    useEffect(() => {
        fetch(`https://green-ven-server.vercel.app/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setorder(data))

    }, [user?.email])


    // Update

// const handlestatusupdate=id=>{
// fetch(`https://green-ven-server.vercel.app/orders/${id}`,{
//     method:'PATCH',
//     headers:{
//         'content-type':'application/json'
//     },
//     body:JSON.stringify({status:'Updated'})
// })
// .then(res=>res.json())
// .then(data=>{
//     console.log(data)
//     if(data.modifiedCount>0){
//         const remaining =orders.filter(odr=>odr._id!==id)
//         const approving=orders.find(oder=>oder._id===id)
//         approving.status="updated"
//         const neworders=[approving,...remaining]
//         setorder(neworders);
//     }
// })
// }






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



            <div className=" w-ful grid lg:grid-cols-3">
                


                        {
                            orders.map(order =>


                                <OrderRow

                                    key={order._id} order={order} handledelete={handledelete}
                                    // handlestatusupdate={handlestatusupdate}

                                ></OrderRow>)
                        }

                 
           </div>
           </div>
      
    );
};

export default Orders;