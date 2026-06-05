import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-zinc-100 py-20 px-5 overflow-hidden'>
      <div className='max-w-[1200px] flex flex-wrap gap-10 md:gap-6 mx-auto'>

        {/* Logo & About */}
        <div className='flex-1 basis-[300px] min-w-0'>
          <div className='text-3xl font-bold'>
            Gr<span className='text-orange-500 uppercase'>o</span>civa
          </div>

          <p className='text-zinc-700 mt-6 max-w-[370px] leading-7'>
            At Grociva, we're committed to bringing farm-fresh produce, quality
            groceries, and everyday essentials directly to your home with
            convenience, affordability, and care.
          </p>

          <p className="text-xs sm:text-sm mt-6 font-bold md:text-base text-zinc-700 leading-6">
            © 2026 Grociva | Designed and Developed by{" "}
            <span className="font-bold text-orange-500">
              Vinit Jain
            </span>
          </p>
        </div>

        {/* Company */}
        <div className='flex-1 md:basis-0 basis-[200px] min-w-0'>
          <ul>
            <li className='font-bold text-2xl'>
              Company
            </li>

            <li className='mt-6 text-zinc-700 hover:text-orange-500 transition-colors duration-300'>
              <NavLink to={"/about"}>
                About Us
              </NavLink>
            </li>

            <li className='mt-6 text-zinc-700 hover:text-orange-500 transition-colors duration-300'>
              <NavLink to={"/contact"}>
                FAQ's
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className='flex-1 md:basis-0 basis-[200px] min-w-0'>
          <ul>
            <li className='font-bold text-2xl'>
              Support
            </li>

            <li className='mt-6 text-zinc-700'>
              Support Center
            </li>

            <li className='mt-6 text-zinc-700'>
              Feedback
            </li>

            <li className='mt-6 text-zinc-700 hover:text-orange-500 transition-colors duration-300'>
              <NavLink to={'/contact'}>
                Contact-us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div className='flex-1 md:basis-0 basis-[300px] min-w-0'>
          <h5 className='font-bold text-2xl'>
            Stay Connected
          </h5>

          <p className='mt-6 text-zinc-700 leading-7'>
            Questions & Feedback?
            <br />
            We'd Love to hear from you
          </p>

          <div className='flex p-1 rounded-lg mt-10 w-full max-w-[350px] bg-white shadow-sm'>
            <input
              type="email"
              name="email"
              autoComplete='off'
              placeholder='Email'
              className='h-[8vh] pl-3 flex-1 bg-white focus:outline-none min-w-0'
            />

            <button className='bg-gradient-to-b from-orange-400 to-orange-600 px-3 py-2  rounded-lg text-white text-2xl hover:from-orange-500 hover:to-orange-700 transition-all duration-300'>
              <IoIosArrowForward />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer