import React from 'react'
import "./CSS/LoginSignup.css"

const LoginSignup = () => {
  return (
    <div className='liginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email Adress' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an acount? <span>Login Here</span>
        </p>
        <div className='loginsignup-agree'>
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agreee to the terms of the use & privacy policy.</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
