import React, { useEffect, useState } from 'react';
import UserDetails from './UserDetails';
import Header from '../../shared/header/Header';

const User = () => {
    const [users,setUsers]=useState([])
  useEffect(
    ()=>{
        fetch('https://green-ven-server-4mnt-n0lrd7eot.vercel.app/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
   
  
    return (
        <div className='mt-36'>
            {
                users.map(user=>
                    <div>

                    
                <UserDetails user={user}></UserDetails>
                <Header user1={user}></Header>
                </div>)
            }
           
        </div>
    );
};

export default User;