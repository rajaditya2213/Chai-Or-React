import React from 'react'
import './CSS/LoginSignUp.css'

export const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
           <div className="loginsignup-container">
              <h1>Sign up</h1>
              <div className="loginsignup-fields">
                <input type="text" placeholder='Your Name '/>
                <input type="email" placeholder='Email Adress' />
                <input type="password" placeholder='Password ' />
              </div>

              <button>Continue</button>
              <p className='loginsignup-login'>Already Have an account? <span>Login here</span>  </p>
               <div className="loginsignup-agree">
                  <input type="checkbox" name='' id='' />
                  <p>By continuing i agree to the terms of use & privacy policy.</p>
               </div>
           </div>
        </div>
  )
}
