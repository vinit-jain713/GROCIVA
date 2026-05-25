import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GoHeartFill } from "react-icons/go";
import { RiShoppingBasketFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { CgMenuMotion } from "react-icons/cg";

const Navbar = () => {

  const [Showmenu, SetShowmenu] = useState(false);

  const toggleMenu = () =>{

    SetShowmenu(!Showmenu);
  }

  return (
    <div className='bg-white fixed top-0 left-0 right-0'>
      <nav className='flex justify-between max-w-[1200px] md:h-[22vh] h-[10vh] px-10 items-center mx-auto'>
        {/* Logo Section */}
        <header>
          <NavLink to={"/"}>
            <div className='text-3xl font-bold'>
              Gr<span className='text-orange-500 uppercase'>o</span>civa
            </div>
          </NavLink>
        </header>

        {/* Navbar Tabs */}
        <div className='md:flex items-center gap-16 font-semibold tracking-wider hidden'>
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
          <div className='md:flex p-2 border-2 rounded-3xl items-center border-orange-500 hidden'>
            <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off' className='flex h-[3vh] px-3 focus:outline-none' />
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
          <NavLink onClick={toggleMenu} className={'text-zinc-800 text-3xl md:hidden'}>
            {Showmenu?<CgMenuMotion /> : <IoMenu />}
          </NavLink>
        </div>

        {/* Mobile Nav */}

          <ul className={`flex flex-col absolute items-center gap-16 bg-orange-300/30 backdrop-blur-xl rounded-2xl p-10 font-semibold tracking-wider md:hidden top-30 -left-full transition-all duration-500 ${Showmenu ? "left-1/2" : ""} transform -translate-x-1/2`}>
            <li>
              <NavLink
                to="/" className={({ isActive }) =>isActive ? "text-orange-500" : "text-black hover:text-orange-500 duration-300"}>
                Home
              </NavLink>
            </li>
          
            <li>
              <NavLink to="/about" className={({ isActive }) =>isActive ? "text-orange-500" : "text-black hover:text-orange-500 duration-300"}>
                About
              </NavLink>
            </li>
          
            <li>
              <NavLink to="/process" className={({ isActive }) =>isActive ? "text-orange-500" : "text-black hover:text-orange-500 duration-300"}>
                Process
              </NavLink>
            </li>
          
            <li>
              <NavLink to="/contact" className={({ isActive }) =>isActive ? "text-orange-500" : "text-black hover:text-orange-500 duration-300"}>
                Contact-us
              </NavLink>
            </li>
            <li className='flex p-2 border-2 rounded-3xl items-center border-black-700 md:hidden'>
            <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off' className='flex h-[3vh] px-3 focus:outline-none' />
            <button className='bg-gradient-to-b from-orange-600 to-orange-400 text-white h-8 w-8 flex justify-center items-center rounded-full text-sm'>
              <IoSearch />
            </button>
          </li>
          </ul>
      </nav>
    </div>
  )
}

export default Navbar