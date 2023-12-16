import React,{useState} from 'react'
import '../../scss/home/homeask.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link, useNavigate } from 'react-router-dom';
import { EMAIL } from '../../redux/actionTypes';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
const  HomeAsk = () => {
  const [email,setemail] =useState("")
  const dispatch: Dispatch<any> = useDispatch()
  const navigate  = useNavigate()
  return (
    <div className="Homeask">
        <div className="left">
           <input type="text" placeholder='Enter email address' value={email} onChange={(e)=>{
            setemail(e.target.value)
           }}/>
           <button onClick={(e)=>{
            e.preventDefault()
            if(email.length===0 || !email.includes('@')){
              alert("Enter your email properly")
            }else{
              dispatch({type:EMAIL,payload:email})
              navigate('/auth/signup')
            }
           }}>
            Signup for codeQuest
           </button>
        </div>
        <div className="right">
           <Link className='link' to="/auth/signin">Sign in <KeyboardArrowRightIcon/></Link>
        </div>
    </div>
  )
}

export default  HomeAsk