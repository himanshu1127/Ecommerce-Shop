import React from 'react'
import './Offers.css'
import hero_img from '../assets/hero_img.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={hero_img} alt="" />
      </div>
      
    </div>
  )
}

export default Offers
