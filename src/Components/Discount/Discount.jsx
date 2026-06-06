import React from 'react'
import Button from '../Button/Button'
import FreashFruits from '../../assets/fresh-fruits.webp'

const Discount = () => {
  return (
    <section className="py-8 md:py-12 px-4 z-0">
      <div
        className="max-w-[1200px] mx-auto bg-zinc-100 rounded-3xl overflow-hidden bg-no-repeat bg-right bg-contain"
        style={{
          backgroundImage: `url(${FreashFruits})`,
          // backgroundSize: '690px',
        }}
      >
        <div className="md:bg-transparent bg-zinc-100 flex flex-col md:flex-row items-center gap-6 md:gap-8 px-6 md:px-10 py-8">

          {/* Mobile Discount */}
          <div className="md:hidden text-center">
            <h2 className="text-6xl font-extrabold text-orange-500 leading-none">
              20%
            </h2>
            <span className="text-zinc-600 font-medium uppercase tracking-wider">
              OFF
            </span>
          </div>

          {/* Desktop Discount */}
          <div className="hidden md:flex items-center justify-center w-[120px]">
            <span className="text-7xl lg:text-8xl font-extrabold text-orange-500 -rotate-90 whitespace-nowrap">
              20%
            </span>
          </div>

          {/* Content */}
          <div className="max-w-[650px] text-center md:text-left">
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Limited Time Offer
            </span>

            <h3 className="Category-Heading text-5xl md:text-5xl lg:text-6xl leading-tight mb-4">
              First Order Discount
            </h3>

            <p className="text-zinc-600 Values-Para text-sm md:text-base leading-relaxed mb-6">
              Unlock exclusive savings on your first order with Grociva! Shop
              fresh fruits, vegetables, dairy products, and everyday essentials
              at unbeatable prices. Enjoy premium quality products, lightning-fast
              delivery, and a hassle-free shopping experience while saving more
              on every purchase.
            </p>

            <div className="flex justify-center md:justify-start">
              <Button content="Get Discount" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Discount