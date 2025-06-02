import React, { useState } from 'react'
import { Mail, Gift, Bell } from 'lucide-react'
import './NewsLetter.css'

const NewsLetter = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <div className='newsletter'>
      <div className="newsletter-badge">
        <Gift size={20} className="newsletter-icon" />
        <span>Exclusive Deals</span>
      </div>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and never miss amazing deals & updates</p>
      <div className="newsletter-form">
        <div className="input-wrapper">
          <Mail size={20} className="input-icon" />
          <input 
            type="email" 
            placeholder='Enter your email address' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button 
          onClick={handleSubscribe}
          className={isSubscribed ? 'subscribed' : ''}
        >
          {isSubscribed ? (
            <>
              <Bell size={18} />
              Subscribed!
            </>
          ) : (
            'Subscribe Now'
          )}
        </button>
      </div>
    </div>
  )
}

export default NewsLetter
