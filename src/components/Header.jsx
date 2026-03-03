import React from 'react'
import '../App.css'
import logo from '/image/logo.png'
import Navlinks from './NavLinks'

function Header() {
  return (
    <div className="header common">
      <Navlinks />
      <img src = {logo} alt = "logo"/>
      <p>KLU Store</p>
    </div>
  )
}

export default Header