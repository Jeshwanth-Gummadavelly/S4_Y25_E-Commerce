import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Feedback from './Feedback'
import Product from './Product'
import Sign from './Sign'
import Signup from './Signup'
import Cart from './Cart'

function MainContent() {
  return (
    <div className="main-content common">
      
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/products" element={<Product />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/signin" element={<Sign />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      
    </div>
  )
}

export default MainContent