import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom';

function Navlinks() {

  function toggleMenuStyle() {
    const menu = document.querySelector('.system-menu');
    menu.classList.toggle('mobile-menu');
    console.log(menu.classList);
  }

  return (
    <div className="navlinks">

        <div onClick={toggleMenuStyle} className="menu-icon"> &#9776; </div>

          <ul className='system-menu'>
              <li> <Link to="/signin">Signin</Link> </li>
              <li> <Link to="/signup">Signup</Link> </li>
              <li> <Link to="/products">Products</Link> </li>
              <li> <Link to="/feedback">Feedback</Link> </li>
              <li> <Link to="/admin">Admin</Link> </li>
              <li> <Link to='/contactus'>Contact Us</Link> </li>
              <li> <Link to='/cart'>Cart</Link> </li>
          </ul>
        
    </div>
  )
}

export default Navlinks