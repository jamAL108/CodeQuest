import React,{useState , useEffect} from 'react'
import '../../scss/auth/signin.scss'
import Logo from '../../images/mainlogog.png'
import { useNavigate } from 'react-router-dom'
import { Eye , EyeOff } from 'lucide-react';
import {  signinInterface  } from '../../interface/interface'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { LOGINERROR } from '../../redux/actionTypes'
import { login } from '../../redux/action';
import { useDispatch , useSelector } from 'react-redux';
import { RootState } from '../../redux';
const Signin = () => {

  useEffect(() => {
    // Update document title when component mounts
    document.title = 'codeQuest - login';
    // Clean up document title when component unmounts
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, []);

  const navigate = useNavigate()
  const dispatch = useDispatch<any>()
  const store = useSelector((state: RootState)=>state)
  const [flag , setflag] = useState<boolean>(false);
  const [error , seterror]= useState<string>("")
  const [data,setdata] = useState<signinInterface>({
    email:"",
    password:""
  })

  const check =()=>{
    seterror("")
    if(data.email.trim()==="" || data.password.trim()===""){
      Alert("Enter all required details properly")
    }else{
      dispatch(login(data,navigate))
    }
  }

  const Alert=(msg:string)=>{
    seterror(msg)
    setTimeout(() => {    
      alert(msg)
    }, 1000);
  }

   
  useEffect(()=>{
    if(store.user.loginerror.length!==0){
      seterror(store.user.loginerror)
      dispatch({type:LOGINERROR , payload:""})
    }
    // eslint-disable-next-line 
  },[store.user.loginerror])


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
            <input type="email" placeholder='Email' value={data.email} onChange={(e)=> setdata({...data , email:e.target.value})} />
           </div>
           <div className="input-label">
            <p>Enter Your Password</p>
            <input type={flag ===true ? "text" : "password"} placeholder='Password'  value={data.password} onChange={(e)=> setdata({...data , password:e.target.value})} />
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
            <button onClick={check}>Login</button>

            <span className='error'>{error ? <ErrorOutlineIcon /> : ""} {error}</span>
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