import React from 'react'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Category from './Components/Category/Category'
import Process from './Components/Process/Process'
import Contact from './Components/Contact/Contact'
import Hero from './Components/Hero/Hero'

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <div>
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/category' element={<Category />} />
        <Route path='/process' element={<Process />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </div>
    </BrowserRouter>
    </div>
  )
}
export default App