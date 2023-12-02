import React,{useState} from 'react'
import '../../scss/auth/signin.scss'
import Logo from '../../images/mainlogog.png'
import { useNavigate } from 'react-router-dom'
import { Eye , EyeOff } from 'lucide-react';
const Signin = () => {
  const navigate = useNavigate()
  const [flag , setflag] = useState<boolean>(false);
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
            <input type="email" placeholder='Email' />
           </div>
           <div className="input-label">
            <p>Enter Your Password</p>
            <input type={flag ===true ? "text" : "password"} placeholder='Password'/>
            {flag ===false ? (
            <Eye className="icon" size={18} onClick={(e)=>{
              setflag(true)
            }}/>
            ) : (
              <EyeOff className='icon' size={18} onClick={(e)=>{
                setflag(false)
              }}/>
            )}
           </div>
           <div className="submit">
            <button>Login</button>
           </div>
        </div>
        <p className='newuser'>new to this platform ? <p onClick={(e)=>{
          e.preventDefault()
          navigate('/auth/signup')
        }}>Register Here</p>
        </p>
      </div>
      <p className='footer'>Copyright © 2023 Jamal Mydeen | Built using ReactJS</p>
    </div>
  )
}

export default Signin