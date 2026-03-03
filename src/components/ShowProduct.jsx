import React from 'react'
import '../App.css'

function ShowProduct({result}) {

  function addCart(pt) {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]")
    cart.push(pt)
    localStorage.setItem("cart", JSON.stringify(cart))
    alert("total items: " + cart.length)
  }

  return (
    <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "40px" }}>
      {result.map((pt)=>{
        return (
          <div className="card">
            <center>
              <h4> {pt.title.substring(0, 20)}... </h4>
              <img src={pt.image} alt="product" />
              <p> ₹{pt.price} </p>
              <button onClick={()=>addCart(pt)} className='bg-yellow-500 text-white px-4 py-2 rounded-md shadow-lg hover:bg-yellow-600 transition duration-300'> Add to Cart </button>
            </center>
          </div>
        )
      })}
    </div>
  )
}

export default ShowProduct