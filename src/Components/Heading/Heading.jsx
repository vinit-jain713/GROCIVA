import React from 'react'

const Heading = (proops) => {
  return (
    <div>
        <div className='w-fit mx-auto'>
            <h1 className='Category-Heading md:text-5xl text-2xl mt-10 md:mt-0 font-bold'>
                <span className='text-orange-500'>{proops.highlight}</span> {proops.heading}
            </h1>
          <div className='w-30 h-1 bg-orange-400 mt-3 ml-auto rounded-full'></div>
        </div>
    </div>
  )
}

export default Heading