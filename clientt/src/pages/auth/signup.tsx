import React,{useEffect, useState} from 'react'
import '../../scss/auth/signup.scss'
import Logo from '../../images/mainlogog.png'
import { Eye , EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { signupInterface } from '../../interface/interface'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { signup } from '../../redux/action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { SIGNUPERROR , EMAIL } from '../../redux/actionTypes'
import { RootState } from '../../redux';
import { Dispatch } from 'redux';
const Signup: React.FC = () => {
  useEffect(() => {
    // Update document title when component mounts
    document.title = 'codeQuest - signup';
    // Clean up document title when component unmounts
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, []);

  const navigate = useNavigate()
  const dispatch: Dispatch<any> = useDispatch()
const store = useSelector((state: RootState)=>state)
  const [flag , setflag] = useState<boolean>(false);
  const [error , seterror]= useState<string>("")
  const [ data , setdata] = useState<signupInterface>({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
    organization:"",
    typeOfWork:"",
    termsncontd:false
  })

  useEffect(()=>{
    if(store.user.email.length!==0){
        setdata({...data, email:store.user.email})
        dispatch({type:EMAIL,payload:""})
    }
  },[store?.user?.email])
 
  useEffect(()=>{
    if(store.user.signuperror!==""){
      seterror(store.user.signuperror)
      dispatch({type:SIGNUPERROR , payload:""})
    }
    // eslint-disable-next-line 
  },[store.user.signuperror])
  

  const check =()=>{
    seterror("")
    if(data.firstName.trim()==="" || data.lastName.trim()==="" || data.email.trim()==="" || data.confirmPassword.trim()===""){
      Alert("Enter all required details properly")
    }else if(data.password !== data.confirmPassword){
        Alert("Password confirmation not matching !")
    }else if(!data.email.includes('@')){
        Alert("Provide Proper Email ID !")
    }else if(data.termsncontd===false){
        Alert("Please check the terms and condition policies")
    }else{
       dispatch(signup(data,navigate));
    }
  }

  const Alert=(msg:string)=>{
    seterror(msg)
    setTimeout(() => {    
      alert(msg)
    }, 1000);
  }

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

                <input type="text" placeholder='First Name' value={data.firstName} onChange={(e)=> setdata({...data , firstName:e.target.value})}/>
                </div>
                <div className="input-label">
                  <p>Enter Last Name <span>*</span></p>
                <input type="text" placeholder='Last Name' value={data.lastName} onChange={(e)=> setdata({...data , lastName:e.target.value})} />
                </div>
                <div className="input-label">
                  <p>Enter your Email <span>*</span></p>
                <input type="text" placeholder='email' value={data.email} onChange={(e)=> setdata({...data , email:e.target.value})} />
                </div>
                </div>
                <div className="middle" id='inp'>
                <div className="input-label">
                  <p>Enter Password<span>*</span></p>
                <input type={flag===true ? "text" : "password"} placeholder='password' value={data.password} onChange={(e)=> setdata({...data , password:e.target.value})} />
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
                <input type={flag===true ? "text" : "password"}  placeholder='confirm password' value={data.confirmPassword} onChange={(e)=> setdata({...data , confirmPassword:e.target.value})} />
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
                <input type="text" placeholder='organization name' value={data.organization} onChange={(e)=> setdata({...data , organization:e.target.value})} />
                </div>
                <div className="input-label">
                  <p>Type of Work</p>
                <input type="text" placeholder='Work Type' value={data.typeOfWork} onChange={(e)=> setdata({...data , typeOfWork:e.target.value})} />
                </div>
                </div>
                <div className="new">
                <div className="check">
                  <input type="checkbox" onChange={(e) => setdata({ ...data, termsncontd: e.target.checked })}  />
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
            <span className='error'>{error ? <ErrorOutlineIcon /> : ""} {error}</span>
            <div className="submit">
              <button onClick={check}>create an account</button>
            </div>
        </div>

        <p className='footer'>Copyright © 2023 Jamal Mydeen | Built using ReactJS</p>
    </div>
  )
}

export default Signup