import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-gradient-to-b from-orange-400 to-orange-600 cursor-pointer text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:shadow-2xl hover:scale-102 hover:from-orange-500 hover:to-orange-700 active:scale-95 transition-all duration-300 ease-in-out'>
        {props.content}
    </button>
)
}

export default Button