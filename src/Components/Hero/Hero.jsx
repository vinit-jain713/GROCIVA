import React from 'react'
import Grocery from '../../assets/grocery.png'
import Button from '../Button/Button'
const Hero = () => {
    return (
        <section>
            <div className='max-w-[1200px] min-h-screen mx-auto px-10 flex md:flex-row flex-col md:gap-20 items-center md:pt-20 pt-30'>
                <div className='flex-1'>
                    <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>Export Best Quality...</span>
                    <h1 className='md:text-6xl/18 text-4xl font-bold mt-3'>
                        Healthy Organic <br/><span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span><br/> In Your City
                    </h1>
                    <p className='text-zinc-600 text-lg mb-5'>
                        Fresh groceries sourced with care and delivered to your doorstep to make everyday shopping simple, fast, and healthy.
                    </p>
                    <Button content={"Shop Now"}/>
                </div>
                <div className='flex-1'>
                    <img src={Grocery}/>
                </div>
            </div>
        </section>
    )
}

export default Hero