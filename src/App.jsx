import React from 'react'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Category from './Components/Category/Category'
import Contact from './Components/Contact/Contact'
import Hero from './Components/Hero/Hero'
import Products from './Components/Products/Products'
import Cart from './Components/Cart/Cart';
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <div>
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </div>
  )
}
export default App