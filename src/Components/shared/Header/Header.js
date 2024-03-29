import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

const menuItems = 
<>

        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/services'>Services</Link></li>
        <li className='mb-4 font-semibold'><a>Blogs</a></li>
</>

const menuButtons = 
<>
<a className="btn btn-primary mb-4 lg:me-4 lg:mb-0">Register</a>
<a className="btn">Login</a>
</>

    return (
    
<div className="navbar bg-base-100 shadow-md">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
        {menuButtons}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {menuItems}
      
    </ul>
  </div>
  <div className="navbar-end hidden lg:flex">
   {menuButtons}
  </div>
  
</div>
  

    );
};

export default Header;