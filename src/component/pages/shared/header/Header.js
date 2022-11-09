import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/Authprovider/Authprovider';
import { HiUserCircle } from "react-icons/hi";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }


    const manuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>


        <li className='font-semibold'><Link to='/product'>Products</Link></li>
        <li className='font-semibold'><Link to='/orders'>Orders</Link></li>

        <li className='font-semibold'>
            {
                user?.uid ?
                    <>
                        <span> {user?.displayName}</span>
                        <button onClick={handleOut} className="btn btn-outline btn-warning">Logout</button>
                    </>

                    :
                    <>
                        <Link to='/login'>LogIn</Link>
                        <Link to='/signup'>Signup</Link>
                    </>

            }


        </li>,

        <li className='font-semibold'><Link to='/signup'>{user?.photoURL ?

            <img style={{ height: '30px' }} className="rounded-full" src={user.photoURL} alt="" />
            : <HiUserCircle></HiUserCircle>

        }</Link></li>

        <li></li>

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {manuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><span className='text-yellow-500'>GREEN</span>VEN</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {manuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Start shoping</a>
            </div>
        </div>
    );
};

export default Header;