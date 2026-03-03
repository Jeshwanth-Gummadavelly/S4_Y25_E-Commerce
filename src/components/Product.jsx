import React, { useEffect, useState } from 'react'
import '../App.css'
import Template from './Template'
import ShowProduct from './ShowProduct'
import Cookies from 'js-cookie'

function Product() {

  const [result, setResult] = useState(null)

  function fetchProduct() {

    if (localStorage.getItem("cache")) {
      console.log("from cache", localStorage.getItem("cache"))
      setResult(JSON.parse(localStorage.getItem("cache")))
      return
    }

    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(json => {
        setResult(json)
        localStorage.setItem("cache", JSON.stringify(json))
        console.log(json)
      })
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  // ✅ Safe cookie handling
  const user = Cookies.get('user')
  const username = user ? JSON.parse(user) : "Guest"

  if (!result)
    return (
      <div className="main-content common">
        <p><b><i><u>Welcome! {username}</u></i></b></p>
        <Template />
      </div>
    )
  else
    return (
      <div className="main-content common">
        <p><b><i><u>Welcome! {username}</u></i></b></p>
        <ShowProduct result={result} />
      </div>
    )
}

export default Product