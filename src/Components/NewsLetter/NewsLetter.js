import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
    <h1>Get Exclusive offers on your email</h1>
    <p>SUBSCRIBE TO OUR NEWSLETTER AND STAY UPDATED</p>
    <div>
        <input type='email' placeholder='Your Email Id'/>
        <button>Subscribe</button>
    </div>
    </div>
  )
}

export default NewsLetter