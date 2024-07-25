import React, { useContext, useEffect, useState } from "react";
import { VscSearch } from "react-icons/vsc";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { AuthContext } from "../../../Context/Authprovider/Authprovider";
import Useadmin from "../../../routers/AdminRoutes/Useadmin";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  const { user, logOut } = useContext(AuthContext);
  // admin status
  const [IsAdmin, isAdminLoading] = Useadmin(user?.email);
  // wishlist
  const [value, setValue] = useState([]);
  console.log(value.length);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else setScrolling(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://green-ven-server-4mnt-mttwc3p3n.vercel.app/wishlist?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
          setValue(data);
          setWishlistCount(data.length); // Set the wishlist count here after fetching the data
        })
        .catch(err => console.error('Error fetching wishlist:', err));
    }
  }, [user]);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const navbarClass = `navbar fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
    scrolling ? "bg-black p-5 opacity-[90%]" : "bg-black"
  }`;

  // log out set up 
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(err => console.error(err));
  }

  // nav items
  const menulist = (
    <>
      <li key="home" className="hover:text-[#1ad458]">
        <Link to="/">Home</Link>
      </li>
      <li key="shop" className="hover:text-[#1ad458]">
        <a href="#shop">Shop</a>
      </li>
      <li key="offer" className="hover:text-[#1ad458]">
        <a href="#offer">Offer</a>
      </li>
      <li key="contact" className="hover:text-[#1ad458]">
        <a href="#contact">Contact</a>
      </li>
      {user?.uid ? 
        <>
        {!isAdminLoading && IsAdmin && (
          <li key="dashboard" className="hover:text-[#1ad458]">
            <Link to='/deshboard'>Dashboard</Link>
          </li>
        )
        }
          
          <li key="logout" className="hover:text-[#1ad458]">
            <button onClick={handleLogOut}>LogOut</button>
          </li>
        </>
        :
        <li key="login" className="hover:text-[#1ad458]">
          <Link to='/login'>LogIn</Link>
        </li>
      }
    </>
  );

  return (
    <div className={navbarClass}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {menulist}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl font-[700] font-Poppins text-white">
          Green <span className="text-[#1ad458]">Ven</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white font-Lato text-xl ">
          {menulist}
        </ul>
      </div>
      <div className="navbar-end flex items-center lg:mr-5">
        {searchOpen && (
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered w-full max-w-xs mr-2"
          />
        )}
        <button
          className="btn btn-ghost text-white hover:text-[#1ad458]"
          onClick={toggleSearch}
        >
          <VscSearch size={24} />
        </button>
        <div className="relative">
          <Link to="/wishlist">
            <FaCartShopping size={24} className="text-white hover:text-[#1ad458]" />
            {wishlistCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                {wishlistCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
