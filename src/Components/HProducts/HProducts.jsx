import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from '../ProductList/Productlist'
import Card from '../Card/Card'
import Button from '../Button/Button'
import { useNavigate } from "react-router-dom";
const HProducts = () => {

  const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood']
  const [isActive, Setisactive] = useState('All');

  const renderCards = ProductList.slice(0, 8).map(product => {
    return (
      <Card product={product} key={product.id} />
    )
  })

  return (
    <section>
      <div className='max-w-[1200px] mx-auto px-10 '>
        <Heading highlight="Our" heading="Products" />

        <div className='flex justify-center gap-7 mt-10'>
          {categories.map((x) => {
            return (
              <button key={x}
                className={`px-5 py-2 text-lg rounded-lg cursor-pointer ${isActive == x ? 'bg-gradient-to-b from-orange-400 to-orange-600 text-white' : 'bg-zinc-200'}`}
                onClick={() => Setisactive(x)}>
                {x}
              </button>
            )
          })}
        </div>

        <div className='grid grid-cols-4 gap-9 mt-20'>
          {renderCards}
        </div>

        <div className='my-3 flex justify-center items-center'>
          <Button content="View All" onClick={() => {navigate("/products");}}/>
        </div>
      </div>
    </section>
  )
}

export default HProducts

