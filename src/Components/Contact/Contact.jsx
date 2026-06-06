import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-zinc-50 py-25 md:py-30 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="bg-orange-100 text-orange-500 px-4 py-2 rounded-full font-bold text-2xl md:text-3xl">
            Contact Us
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-6">
            We'd Love To
            <span className="text-orange-500"> Hear From You</span>
          </h1>

          <p className="text-zinc-600 max-w-2xl mx-auto mt-5 leading-7">
            Have questions about our products, delivery services, or your
            orders? Our team is always ready to help. Reach out to us and we'll
            get back to you as soon as possible.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Get In Touch
            </h2>

            <p className="text-zinc-600 leading-7 mb-8">
              Whether you need help with an order, want to learn more about our
              products, or simply have feedback, we're here for you.
            </p>

            <div className="space-y-5">

              <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm">
                <div className="bg-orange-100 p-4 rounded-full">
                  <FaPhoneAlt className="text-orange-500 text-xl" />
                </div>

                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-zinc-600">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm">
                <div className="bg-orange-100 p-4 rounded-full">
                  <FaEnvelope className="text-orange-500 text-xl" />
                </div>

                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-zinc-600">support@grociva.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm">
                <div className="bg-orange-100 p-4 rounded-full">
                  <FaMapMarkerAlt className="text-orange-500 text-xl" />
                </div>

                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-zinc-600">
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">

            <form className="space-y-5">

              <div>
                <label className="block font-medium mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-zinc-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-zinc-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full border border-zinc-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border border-zinc-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-orange-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact