import React from 'react';
import Header from '../pages/shared/header/Header';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    const menulist = (
        <>
            
            <li> <Link to='/deshboard'>Orders</Link> </li>
            <li> <Link to='users'>Users</Link> </li>
            <li> <Link to='addproduct'>Add Products</Link> </li>
            <li> <Link to='statistics'>Statistics</Link> </li>
        </>
    );

    return (
        <div>
            <div className="lg:flex lg:h-screen">
{/* Sidebar (always visible on larger screens) */}
<div className="lg:menu flex lg:justify-start justify-center   bg-base-200 text-base-content lg:w-80 p-4  lg:block">
                {/* Sidebar content here */}
                <ul className="lg:menu flex text-center mt-20 gap-4 ">
                    {menulist}
                </ul>
            </div>

            {/* Main content area */}
            <div className="flex flex-col flex-1">
                <Header />

                {/* Outlet for rendering nested routes */}
                <div className="overflow-y-auto p-4">
                    <Outlet />
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default DashboardLayout;
