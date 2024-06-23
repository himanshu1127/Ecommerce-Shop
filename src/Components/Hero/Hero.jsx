import React from 'react'
import './Hero.css'
import hero_img from '../assets/hero_img.png'


const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New Arrivals</h2>
        <div>
            <div className="hero-hand-icon">
                <p>New</p>
                <img src="" alt="" />
            </div>
            <p>Collection's</p>
            <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection's</div>
            <img src="" alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt="" />
      </div>
    </div>
  )
}

export default Hero
