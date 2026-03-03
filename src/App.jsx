import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Feedback from './components/Feedback'
import Product from './components/Product'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <MainContent />
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
