import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Ecxlusive Offer's  On Your Email</h1>
      <p>Subscribe To Our News Letter</p>
      <div>
        <input type="email" placeholder='ABC@gmail.com' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
