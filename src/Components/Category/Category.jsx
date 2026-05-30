import React from 'react'
import FruitsCat from '../../assets/fruits-and-veggies.png'
import SeaFoodCat from '../../assets/meat-and-seafood.png'
import DairyCat from '../../assets/dairy-and-eggs.png'
import Button from '../Button/Button'
import Heading from '../Heading/Heading'

const Category = () => {
  const RenderCard = category.map((card)=>{
    return(
      <div className="flex-1 mx-10 md:m-0 basis-[300px] flex flex-col justify-between bg-gradient-to-t from-zinc-200 to-white shadow-[0_5px_25px_rgba(0,0,0,0.35)] rounded-xl p-6" key={card.id}>
        <div>
          <img src={card.image}/>
        </div>
        <div>
          <h3 className='font-bold text-3xl py-2'>{card.title}</h3>
          <p className='text-zinc-700 py-2'>{card.description}</p>
          <Button content="See All"/>
        </div>
      </div>
    )
  })
  return (
    <>
      <div className='w-fit mx-auto md:mt-10'>
        <div className='flex flex-col items-center'>
          <h1>
            <Heading highlight="Search" heading="By Your Category"/>
          </h1>
        </div>
      </div>
        <div className='max-w-[1200px] mx-auto flex flex-wrap md:gap-20 gap-10 mt-10'>
          {RenderCard}
        </div>
    </>
  )
}

export default Category;

const category = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description: "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: FruitsCat
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description: "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: DairyCat
  },
  {
    id: 3,
    title: "Meat & SeaFood",
    description: "High-Quality, responsibly sourced meat and seafood. choose from fresh cuts, marinated options, and more.",
    image: SeaFoodCat
  },
]