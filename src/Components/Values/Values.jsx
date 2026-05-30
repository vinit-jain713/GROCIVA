import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from 'react-icons/fa'
import Basket from '../../assets/basket-full-vegetables.png'

const Values = () => {

  const LeftValues = Value.slice(0, 2).map(item => {
    return (
      <div
        key={item.id}
        className="flex md:flex-row-reverse flex-col items-center md:items-start gap-3"
      >
        <span className="flex justify-center items-center w-12 h-12 rounded-full bg-gradient-to-b from-orange-300 to-orange-600 text-white text-xl shrink-0">
          {item.icon}
        </span>

        <div className="w-full text-center md:text-right">
          <h3 className="Values-Titles text-4xl md:text-5xl font-bold leading-none">
            {item.title}
          </h3>

          <p className="Values-Para text-sm text-zinc-600 leading-relaxed mt-1">
            {item.para}
          </p>
        </div>
      </div>
    )
  })

  const RightValues = Value.slice(2, 4).map(item => {
    return (
      <div
        key={item.id}
        className="flex md:flex-row flex-col items-center md:items-start gap-3"
      >
        <span className="flex justify-center items-center w-12 h-12 rounded-full bg-gradient-to-b from-orange-300 to-orange-600 text-white text-xl shrink-0">
          {item.icon}
        </span>

        <div className="w-full text-center md:text-left">
          <h3 className="Values-Titles text-4xl md:text-5xl font-bold leading-none">
            {item.title}
          </h3>

          <p className="Values-Para text-sm text-zinc-600 leading-relaxed mt-1">
            {item.para}
          </p>
        </div>
      </div>
    )
  })

  return (
    <section className="py-12 md:py-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <Heading highlight="Our" heading="Values" />

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 md:gap-4">

          {/* Left Values */}
          <div className="order-2 md:order-1 flex flex-col gap-12 md:gap-40">
            {LeftValues}
          </div>

          {/* Center Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src={Basket}
              alt="Basket"
              className="w-[220px] sm:w-[280px] md:w-full max-w-full object-contain"
            />
          </div>

          {/* Right Values */}
          <div className="order-3 flex flex-col gap-12 md:gap-40">
            {RightValues}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Values

const Value = [
  {
    id: 1,
    title: "Trust",
    para: "Quality groceries, fair prices, and service you can always rely on.",
    icon: <FaHeart />
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "Fresh fruits, vegetables, and essentials sourced daily.",
    icon: <FaLeaf />
  },
  {
    id: 3,
    title: "Food Safety",
    para: "Strict quality checks ensure every product is safe and fresh.",
    icon: <FaShieldAlt />
  },
  {
    id: 4,
    title: "100% Organic",
    para: "Naturally grown organic products for a healthier lifestyle.",
    icon: <FaSeedling />
  }
]