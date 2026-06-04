import React from 'react'
import Navbar from '../Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Category from '../Category/Category'
import Process from '../Process/Process'
import Contact from '../Contact/Contact'
import Hero from '../Hero/Hero'
import Values from '../Values/Values'
import HProducts from '../HProducts/HProducts'
import Discount from '../Discount/Discount'
const HomePage = () => {
  return (
    <div>
      <h1></h1>
    </div>
  )
}

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Values />
      {/* <HProducts /> */}
      <Discount />
    </div>
  )
}

export default Home