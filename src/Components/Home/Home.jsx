import React from 'react'
import Navbar from '../Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../Category/Category'
import Process from '../Process/Process'
import Contact from '../Contact/Contact'
import Hero from '../Hero/Hero'

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
    </div>
  )
}

export default Home