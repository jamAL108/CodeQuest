'use client';
import React,{useState} from 'react'
import '../scss/components/homeask.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const  HomeAsk = () => {
  const [email,setemail] =useState("")
  return (
    <div className="Homeask">
        <div className="left">
           <input type="text" placeholder='Enter email address' value={email} onChange={(e)=>{
            setemail(e.target.value)
           }}/>
           <button>
            Signup for codeQuest
           </button>
        </div>
        <div className="right">
           <button>Sign in <KeyboardArrowRightIcon/></button>
        </div>
    </div>
  )
}

export default  HomeAsk