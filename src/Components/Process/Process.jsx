import React from 'react'
import { FaLeaf, FaTruck, FaShoppingBasket, FaUsers } from 'react-icons/fa'
const Process = () => {
  return (
      <section className="py-30 md:py-30 bg-zinc-50 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-5">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-orange-100 text-orange-500 px-4 py-2 font-extrabold rounded-full font-medium text-2xl md:text-3xl">
            About Grociva
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5 leading-tight">
            Bringing Fresh Groceries
            <span className="text-orange-500"> Directly To Your Door</span>
          </h2>

          <p className="text-zinc-600 max-w-3xl mx-auto mt-6 text-base md:text-lg leading-7 md:leading-8">
            At Grociva, we believe grocery shopping should be simple,
            affordable, and convenient. From farm-fresh fruits and vegetables
            to dairy products and daily essentials, we carefully select quality
            products and deliver them straight to your doorstep. Our mission is
            to save your time while ensuring you always receive fresh and
            reliable groceries for your family.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left Side */}
          <div className="min-w-0">
            <h3 className="text-2xl md:text-3xl font-bold mb-5">
              Why Thousands Choose Grociva
            </h3>

            <p className="text-zinc-600 leading-7 md:leading-8 mb-8">
              We are committed to providing a seamless shopping experience with
              a wide variety of grocery products, competitive prices, and
              dependable delivery services. Every order is handled with care to
              ensure freshness and customer satisfaction.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <div className="bg-white p-5 rounded-xl shadow-sm">
                <FaLeaf className="text-orange-500 text-3xl mb-4" />
                <h4 className="font-semibold text-lg mb-2">
                  Fresh Products
                </h4>
                <p className="text-zinc-600 text-sm leading-6">
                  Carefully sourced fruits, vegetables, and daily essentials.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm">
                <FaTruck className="text-orange-500 text-3xl mb-4" />
                <h4 className="font-semibold text-lg mb-2">
                  Fast Delivery
                </h4>
                <p className="text-zinc-600 text-sm leading-6">
                  Quick and reliable delivery right to your doorstep.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm">
                <FaShoppingBasket className="text-orange-500 text-3xl mb-4" />
                <h4 className="font-semibold text-lg mb-2">
                  Wide Selection
                </h4>
                <p className="text-zinc-600 text-sm leading-6">
                  Everything you need in one place at affordable prices.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow-sm">
                <FaUsers className="text-orange-500 text-3xl mb-4" />
                <h4 className="font-semibold text-lg mb-2">
                  Happy Customers
                </h4>
                <p className="text-zinc-600 text-sm leading-6">
                  Trusted by families for quality groceries and service.
                </p>
              </div>

            </div>
          </div>

          {/* Right Side Stats */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 min-w-0">

            <div className="bg-white p-5 md:p-8 rounded-2xl shadow-sm text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-orange-500">
                10K+
              </h3>
              <p className="text-zinc-600 mt-2 md:mt-3 text-sm md:text-base">
                Orders Delivered
              </p>
            </div>

            <div className="bg-white p-5 md:p-8 rounded-2xl shadow-sm text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-orange-500">
                5K+
              </h3>
              <p className="text-zinc-600 mt-2 md:mt-3 text-sm md:text-base">
                Happy Customers
              </p>
            </div>

            <div className="bg-white p-5 md:p-8 rounded-2xl shadow-sm text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-orange-500">
                500+
              </h3>
              <p className="text-zinc-600 mt-2 md:mt-3 text-sm md:text-base">
                Fresh Products
              </p>
            </div>

            <div className="bg-white p-5 md:p-8 rounded-2xl shadow-sm text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-orange-500">
                24/7
              </h3>
              <p className="text-zinc-600 mt-2 md:mt-3 text-sm md:text-base">
                Customer Support
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Process