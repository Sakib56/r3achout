import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png'

const Navbar = () => {

    const navOptions = <>
        <li><Link to='/'>Product</Link></li>
        <li><Link to=''>Benefit</Link></li>
        <li><Link to=''>Pricing</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
       

    </>

    return (
        <div className="navbar bg-[#064B84EB] text-white px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        {navOptions}
                    </ul>
                </div>
                <div>
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <p className='mr-3 hidden md:block'>See how its works</p>
                <Link to='/login'><a className="rounded-s-full rounded-e-full px-5 py-2 bg-white text-green-600">Login</a></Link>
            </div>
        </div>
    );
};

export default Navbar;