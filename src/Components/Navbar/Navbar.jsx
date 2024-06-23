import React, { useState } from 'react'
import './Navbar.css'
import logo from "../assets/logo.png"
import cartIcon from "../assets/cart_icon.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu,setMenu]=useState()
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        {/* <img src={logo} alt="logo" /> */}
        <p>ZARA</p>
      </div>
      
      <ul className='nav-menu'>
        <li onClick={()=>setMenu("Shop")}><Link style={{textDecoration:"none",color: "#626262"}} to='/'>Shop</Link>{ menu === "Shop" ? <hr/> : null }</li>
        <li onClick={()=>setMenu("Mens")}><Link style={{textDecoration:"none",color: "#626262"}} to='/Mens'>Men</Link>{ menu === "Mens" ? <hr/> : null }</li>
        <li onClick={()=>setMenu("Womens")}><Link style={{textDecoration:"none",color: "#626262"}} to='/Womens'>Women</Link>{ menu === "Womens" ? <hr/> : null }</li>
        <li onClick={()=>setMenu("Kids")}><Link style={{textDecoration:"none",color: "#626262"}} to='/Kids'>Kids</Link>{ menu === "Kids" ? <hr/> : null }</li>
      </ul>
      <div className="nav-login-cart">
       <Link to="/Login"> <button>Login</button></Link>
       <Link to="/Cart"><img src={cartIcon} alt="icon" /></Link> 
        <div className="nav-cart-count">0</div>
      </div> 
    </div>
  )
}

export default Navbar
