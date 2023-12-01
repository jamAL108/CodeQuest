import React from 'react'
import '../../scss/auth/signin.scss'
import Logo from '../../images/mainlogog.png'

const Signin = () => {
  return (
    <div className="DOsignin">
      <div className="container">
        <div className="logo">
          <div className="left">
             <img src={Logo} alt="ds" />
             <h2>codeQuest</h2>
             </div>
             <h1>•</h1>
                <div className="right">
                    <h2>Login</h2>
            </div>
        </div>
        <div className="form">
           <div className="input-label">
            <p>Enter Your Email</p>
            <input type="email" placeholder='Email'/>
           </div>
           <div className="input-label">
            <p>Enter Your Password</p>
            <input type="password" placeholder='Password'/>
           </div>
           <div className="submit">
            <button>Login</button>
           </div>
        </div>
      </div>
      <p className='footer'>Copyright © 2023 Jamal Mydeen | Built using ReactJS</p>
    </div>
  )
}

export default Signin