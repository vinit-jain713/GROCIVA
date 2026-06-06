import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Heading from '../Heading/Heading'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Customer1 from '../../assets/customer1.webp'
import Customer2 from '../../assets/customer2.webp'
import Customer3 from '../../assets/customer3.webp'
import Customer4 from '../../assets/customer4.webp'
import Customer5 from '../../assets/customer5.webp'
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <section className='overflow-hidden'>
      <div className='max-w-[1200px] px-4 md:px-10 py-10 mx-auto overflow-hidden'>
        <Heading highlight="Customers" heading="Saying" />

        <div className='flex justify-end p-4 gap-3'>
          <button className='custom-prev text-2xl rounded-lg w-7 h-7 bg-zinc-100 flex justify-center items-center hover:bg-gradient-to-b from-orange-400 to-orange-600 transition hover:text-white duration-200 cursor-pointer'>
            <IoIosArrowBack />
          </button>
          <button className='custom-next text-2xl rounded-lg w-7 h-7 bg-zinc-100 flex justify-center items-center hover:bg-gradient-to-b from-orange-400 to-orange-600 transition hover:text-white duration-200 cursor-pointer'>
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev"
        }} 
        loop={true} 
        breakpoints={{
          640: {slidesPerView: 1},
          768: {slidesPerView: 2},
          1024: {slidesPerView: 3},
        }}
        autoHeight={false}
        modules={[Navigation]} className="mySwiper">
          {
            review.map(item => {
              return (
                <SwiperSlide key={item.id} className='bg-zinc-100 p-5 h-auto'>
                  <div className='bg-white border-1 shadow-xl rounded-xl p-5 min-h-[280px] flex flex-col'>
                    <div className='flex gap-4 items-center'>
                      <div className='h-16 w-16 rounded-full bg-red-600 outline-2 outline-orange-500 outline-offset-4 overflow-hidden'> 
                        <img src={item.image} className='h-full w-full'/>
                      </div>
                      <div>
                        <div className='text-xl font-bold'>
                          {item.name}
                        </div>
                        <p className='text-zinc-700'>{item.proffesion}</p>
                        <span className='flex text-yellow-400 mt-3 text-lg'>
                          {Array.from({length: item.rating}, (_, index)=>(
                            <FaStar key={index}/>
                        ))}
                        </span>
                      </div>
                    </div>

                    <div className='text-zinc-600 mt-2'>
                      {item.para}
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials

const review = [
  {
    id: 1,
    name: "Emily Jhonson",
    proffesion: "Food Bloger",
    rating: 5,
    para: "Grociva consistently delivers high-quality groceries right to my doorstep. Their commitment to freshness, affordability, and customer satisfaction truly sets them apart from other online grocery services.",
    image: Customer1,
  },
  {
    id: 2,
    name: "David Smith",
    proffesion: "Chef",
    rating: 4,
    para: "I've been ordering from Grociva for months, and the quality has never disappointed me. The fruits and vegetables arrive fresh every time, and the customer service team is always helpful and responsive.",
    image: Customer2,
  },
  {
    id: 3,
    name: "Aliya Zahra",
    proffesion: "Model",
    rating: 5,
    para: "Shopping with Grociva is convenient and stress-free. The website is easy to use, delivery is always on time, and the product quality is excellent. It saves me so much time every week.",
    image: Customer3,
  },
  {
    id: 4,
    name: "Carlos Mendes",
    proffesion: "Fitness Coach",
    rating: 3,
    para: "Grociva has completely changed the way I shop for groceries. The products are always fresh, the prices are reasonable, and the delivery is incredibly fast. I love how easy it is to find everything I need in one place.",
    image: Customer4,
  },
  {
    id: 5,
    name: "Natcha Phongchai",
    proffesion: "Nutritionist",
    rating: 4,
    para: "What impressed me most about Grociva is their attention to quality. From fresh produce to dairy products, everything arrives in perfect condition. It's now my go-to grocery store.",
    image: Customer5,
  },
]