import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';

const Card = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className='bg-zinc-100 p-5 rounded-xl'>
      <div className='flex justify-between'>
        <span className='text-zinc-600 text-2xl'>
          <FaHeart />
        </span>
        <button onClick={() => addToCart(product)} className='bg-gradient-to-b from-orange-300 to-orange-600 px-4 py-3 rounded-lg text-white'>
          <FaPlus />
        </button>
      </div>
      
      <div className='w-full h-50'>
        <img src={product.image} loading="lazy" className='w-full h-full object-contain' />
      </div>

      <div className='text-center'>
        <h2 className='font-bold text-xl'>{product.title}</h2>
        <p className='font-semibold'>${product.price}</p>
        <div onClick={() => addToCart(product)}>
          <Button content="Shop Now" />
        </div>
      </div>
    </div>
  )
}

export default Card