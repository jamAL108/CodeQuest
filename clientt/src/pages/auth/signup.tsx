import React from 'react'
import '../../scss/auth/signup.scss'
import Logo from '../../images/mainlogog.png'

const Signup: React.FC = () => {

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
                <input type="text" placeholder='email' />
                </div>
                <div className="input-label">
                  <p>confirm password<span>*</span></p>
                <input type="text" placeholder='email' />
                </div>
                </div>
                <div className="down" id='inp'>
                <div className="input-label">
                  <p>Enter your organixation</p>
                <input type="text" placeholder='email' />
                </div>
                <div className="input-label">
                  <p>Type of Work</p>
                <input type="text" placeholder='email' />
                </div>
                </div>
                <div className="check">
                  <input type="checkbox" />
                  <p>I have read and agreee all terms & conditions</p>
               </div>
            </div>
            <div className="submit">
              <button>create an account</button>
            </div>
        </div>
    </div>
  )
}

export default Signup