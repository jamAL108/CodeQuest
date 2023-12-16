import React,{useState} from 'react';
import '../../scss/dashboard/settings.scss'
import { LogOut } from 'lucide-react';
import { motion } from 'framer-motion'
import { user } from '../../interface/interface';
const Settings = () => {

  const Data: string | null = localStorage.getItem('codeQuestUSER')
  const userdata: user | null =  Data ? JSON.parse(Data) : null
  console.log(userdata)
  const [user , setuser] =  useState<user | null>(userdata)

  const [useredit,setuseredit] = useState<user | null>(user)

  console.log(useredit)

  return (
    <div className="setting">
      <motion.div className="upper" initial={{ scale:0 ,  opacity:0}}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, scale: 1 }} transition={{ type: 'tween' }}>
        <h2>Settings</h2>
        <div className="btn">logout <LogOut size={17}/></div>
      </motion.div>
      <motion.div className="line" initial={{ scale:0 ,  opacity:0}}
        viewport={{ once: true }}
        whileInView={{ opacity: 0.2, scale: 1 }} transition={{ type: 'tween' }}>
      </motion.div>
      <motion.div className="personalDetail" initial={{ scale:0 ,  opacity:0}}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, scale: 1 }} transition={{ type: 'tween' }}>
        <div className="heading">
        <h2>Your Details</h2>
        <button>
            Save Changes
          </button>
        </div>
        <div className="form">
          <div style={{gridRow:"1"}} id='child'>
          <div className="input-section">
            <p>First Name</p>
            <input type="text" style={(useredit?.firstName !== user?.firstName) ? {border:"2px solid #6a8de1"} : {border: "2px solid rgba(209, 203, 203, 0.3)"}}  value={useredit?.firstName} onChange={(e)=>{
              if(useredit){
                setuseredit({...useredit , firstName:e.target.value})
              }
            }} />
          </div>
          <div className="input-section">
            <p>Last Name</p>
            <input type="text" style={(useredit?.lastName !== user?.lastName) ? {border:"2px solid #6a8de1"} : {border: "2px solid rgba(209, 203, 203, 0.3)"}}  value={useredit?.lastName} onChange={(e)=>{
              if(useredit){
                setuseredit({...useredit , lastName:e.target.value})
              }
            }} />
          </div>
          </div>
          <div  style={{gridRow:"2"}} id='child'>
          <div className="input-section">
            <p>Email ID</p>
            <input type="text" style={(useredit?.email !== user?.email) ? {border:"2px solid #6a8de1"} : {border: "2px solid rgba(209, 203, 203, 0.3)"}}  className='readonly' readOnly value={useredit?.email} onChange={(e)=>{
              if(useredit){
                setuseredit({...useredit , email:e.target.value})
              }
            }} />
          </div>         
           <div className="input-section">
            <p>password</p>
            <input type="text" style={(useredit?.password !== user?.password) ? {border:"2px solid #6a8de1"} : {border: "2px solid rgba(209, 203, 203, 0.3)"}}  value={useredit?.password} onChange={(e)=>{
              if(useredit){
                setuseredit({...useredit , password:e.target.value})
              }
            }} />
          </div>          
          <div className="input-section">
            <p>confirm password</p>
            <input type="text" style={(useredit?.password !== user?.password) ? {border:"2px solid #6a8de1"} : {border: "2px solid rgba(209, 203, 203, 0.3)"}}  className='readonly' readOnly value={useredit?.password} onChange={(e)=>{
              if(useredit){
                setuseredit({...useredit , password:e.target.value})
              }
            }} />
          </div>
          </div>
          <div style={{gridRow:"3"}} id='child'>
          <div className="input-section">
            <p>Organization</p>
            <input type="text" style={(useredit?.organization !== user?.organization) ? {border:"2px solid #6a8de1"} : {border: "2px solid rgba(209, 203, 203, 0.3)"}}  value={useredit?.organization} onChange={(e)=>{
              if(useredit){
                setuseredit({...useredit , organization:e.target.value})
              }
            }}  />
          </div>          
          <div className="input-section">
            <p>work type</p>
            <input type="text" style={(useredit?.typeOfWork !== user?.typeOfWork) ? {border:"2px solid #6a8de1"} : {border: "2px solid rgba(209, 203, 203, 0.3)"}}  value={useredit?.typeOfWork} onChange={(e)=>{
              if(useredit){
                setuseredit({...useredit , typeOfWork:e.target.value})
              }
            }} />
          </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Settings