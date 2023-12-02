import React,{useState} from 'react'
import '../../scss/auth/signup.scss'
import Logo from '../../images/mainlogog.png'
import { Eye , EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {
  const [flag , setflag] = useState<boolean>(false);
  const navigate = useNavigate()
  // const [showPassword, setShowPassword] = React.useState<boolean>(false);

  // const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword: React.MouseEventHandler<HTMLButtonElement> = (event) => {
  //   event.preventDefault();
  // };
  return (
    <div className="Signup">
        <div className="container">
            <div className="logo">
                <div className="left">
                <img src={Logo} alt="" />
                <h2>codeQuest</h2>
                </div>
                <h1>•</h1>
                <div className="right">
                    <h2>create an account</h2>
                </div>
            </div>
            <div className="form">
              <div className="up" id='inp'>
                <div className="input-label">
                  <p>Enter First Name <span>*</span></p>
                <input type="text" placeholder='First Name' />
                </div>
                <div className="input-label">
                  <p>Enter Last Name <span>*</span></p>
                <input type="text" placeholder='Last Name' />
                </div>
                <div className="input-label">
                  <p>Enter your Email <span>*</span></p>
                <input type="text" placeholder='email' />
                </div>
                </div>
                <div className="middle" id='inp'>
                <div className="input-label">
                  <p>Enter Password<span>*</span></p>
                <input type={flag===true ? "text" : "password"} placeholder='password' />
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
                <div className="input-label">
                  <p>confirm password<span>*</span></p>
                <input type={flag===true ? "text" : "password"}  placeholder='confirm password' />
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
                </div>
                <div className="down" id='inp'>
                <div className="input-label">
                  <p>Enter your organization</p>
                <input type="text" placeholder='organization name' />
                </div>
                <div className="input-label">
                  <p>Type of Work</p>
                <input type="text" placeholder='Work Type' />
                </div>
                </div>
                <div className="new">
                <div className="check">
                  <input type="checkbox" />
                  <p>I have read and agreee all terms & conditions</p>
               </div>
               <div className="navi">
                <p className='olduser'>Already an Member ? <p onClick={(e)=>{
                  e.preventDefault()
                  navigate('/auth/signin')
                }}>Login</p> </p>
               </div>
               </div>
            </div>
            <div className="submit">
              <button>create an account</button>
            </div>
        </div>

        <p className='footer'>Copyright © 2023 Jamal Mydeen | Built using ReactJS</p>
    </div>
  )
}

export default Signup