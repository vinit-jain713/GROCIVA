import React from 'react'
import { NavLink } from 'react-router-dom'
import { GoHeartFill } from "react-icons/go";
import { RiShoppingBasketFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='bg-white'>
      <nav className='flex justify-between max-w-[1200px] h-[22vh] px-10 items-center mx-auto'>
        {/* Logo Section */}
        <header>
          <NavLink to={"/"}>
            <div className='text-3xl font-bold'>
              Gr<span className='text-orange-500 uppercase'>o</span>civa
            </div>
          </NavLink>
        </header>

        {/* Navbar Tabs */}
        <div className='flex items-center gap-16 font-semibold tracking-wider'>
          <ul>
            <li>
              <NavLink
                to="/" className={({ isActive }) =>isActive ? "text-orange-500" : "text-black hover:text-orange-500 duration-300"}>
                Home
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="/about" className={({ isActive }) =>isActive ? "text-orange-500" : "text-black hover:text-orange-500 duration-300"}>
                About
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="/process" className={({ isActive }) =>isActive ? "text-orange-500" : "text-black hover:text-orange-500 duration-300"}>
                Process
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="/contact" className={({ isActive }) =>isActive ? "text-orange-500" : "text-black hover:text-orange-500 duration-300"}>
                Contact-us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Search Bar and Favourites */}
        <div className='flex items-center gap-x-3'>
          <div className='flex p-2 border-2 rounded-3xl border-orange-500'>
            <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off' className='flex h-[10vh] px-3 focus:outline-none' />
            <button className='bg-gradient-to-b from-orange-600 to-orange-400 text-white h-8 w-8 flex justify-center items-center rounded-full text-sm'>
              <IoSearch />
            </button>
          </div>
          <NavLink to={'/'} className={'text-2xl text-red-400'}>
            <GoHeartFill />
          </NavLink>
          <NavLink to={'/'} className={'text-2xl text-zinc-900'}>
            <RiShoppingBasketFill />
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar