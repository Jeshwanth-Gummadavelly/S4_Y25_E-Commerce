import React from 'react'
import { useNavigate } from 'react-router-dom';

function Cart() {

    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    const navigate = useNavigate();

    function handleSubmit() {
        alert("Payment Successful! Total Amount: ₹" + cartItems.reduce((sum, item) => sum + item.price, 0))
        localStorage.removeItem('cart');
        navigate("/products")
    }

    return (
    <div className="main-content common">
      <table className='border border-gray-300 shadow-xl rounded-lg'>
        <tr>
          <td className="p-[2vw]" colSpan={2}>
            <h1 className="underline">
              Billing Page
            </h1>
          </td>
        </tr>

        <tr>
          <td> <b> Product Name </b> </td>
          <td> <b> Product Cost </b> </td>
        </tr>

        {cartItems.map((item, index)=>{
          return (
            <tr>
              <td> {item.title.substring(0, 20)} </td>
              <td> {item.price} </td>
            </tr>
          )
        })}

        <tr>
          <td> Total Cost </td>
          <td> {cartItems.reduce((sum, item) => sum + item.price, 0)} </td>
        </tr>        

        <tr>
          <td className="p-[2vw] text-center" colSpan={2}>
            <button onClick={handleSubmit} className='bg-indigo-300 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-xl transition duration-900'>Pay Now</button>
          </td>
        </tr>        
      </table>
    </div>
  )
}

export default Cart