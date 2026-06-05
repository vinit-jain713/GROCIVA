import React from 'react'
import Navbar from '../Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Category from '../Category/Category'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Hero from '../Hero/Hero'
import Values from '../Values/Values'
import Discount from '../Discount/Discount'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../Footer/Footer'
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
      <Discount />
      <Testimonials />
    </div>
  )
}

export default Home