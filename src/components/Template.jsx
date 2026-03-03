import React from 'react'
import logo from '/image/logo.png'
import '../App.css'

function Template() {
  return (
    <div className="card">
        <h4> Data Loading </h4>
        <img src={logo} alt="product" />
        <p> ₹ xx,xxx </p>
    </div>
  )
}

export default Template
