import React from 'react'
import Navbar from '../Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../About/About'
import Process from '../Process/Process'
import Contact from '../Contact/Contact'

const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

const Home = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/process' element={<Process />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Home