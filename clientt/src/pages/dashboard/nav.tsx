import React from 'react'
import '../../scss/dashboard/dashboard.nav.css'
import Logo from '../../images/mainlogog.png'
import { AlignRight , LayoutDashboard ,ListPlus , Settings ,UserRound } from 'lucide-react'; 

import { user , dashboardNavProps } from '../../interface/interface';

const Nav: React.FC<dashboardNavProps> = (props) => {
  const {flagfun , flag} = props;
  
  const Data: string | null = localStorage.getItem('codeQuestUSER')
  console.log(Data)
  const user: user | null =  Data ? JSON.parse(Data) : null
  return (
    <div className="DashNav">
       <div className="up">
        <div className="left">
          <img src={Logo} alt="bf" />
          <h2>codeQuest</h2>
          </div>
          <div className="right">
          <AlignRight className='icon' color="white" size={20}/>
          </div>
       </div>
       <div className="middle">
          <p>Welcome Jamal,</p>
          <p>Start new Interview sections</p>
       </div>
       <div className="down">
        <div className="covertop" style={flag===2 ? {border:"1px solid #6F8AE9"} : {border:"none"}}>
         <div className="top" style={flag===2 ? {backgroundColor:"#6F8AE9" , color:"#282833" , pointerEvents:"none"} : {backgroundColor:" #282833", color:"white"}} onClick={(e)=>{
            e.preventDefault()
            flagfun('addsection')
           }} >
         <ListPlus color={flag===2 ? "#282833" :'#AD9BF5'} className='icon' size={25}/>
         <h2 style={flag===2 ? {fontWeight:"530"} : {fontWeight:"470"}}>Add new Section</h2>
         </div>
         </div>
         <div className="line"></div>
         <div className="bottom">
           <div className="dash" onClick={(e)=>{
            e.preventDefault()
            flagfun('activities')
           }}>
            <div className="upper" style={flag===0 ? {border:"1px solid #6F8AE9"} : {border:"none"}}>
             <div className="boxy" style={flag===0 ? {backgroundColor:"#6F8AE9"} : {backgroundColor:"#282833"}}>
              <LayoutDashboard color={flag===0 ? "#282833" : "#F0A65D"} size={24}/>
             </div>
             </div>
             <h2>Dashboard</h2>
           </div>
           <div className="dash" onClick={(e)=>{
            e.preventDefault()
            flagfun('settings')
           }}>
           <div className="upper" style={flag===1 ? {border:"1px solid #6F8AE9"} : {border:"none"}}>
           <div className="boxy" style={flag===1 ? {backgroundColor:"#6F8AE9"} : {backgroundColor:"#282833"}}>
              <Settings color={flag===1 ? "#282833" : "#87CAF6"} size={24}/>
             </div>
             </div>
             <h2>Settings</h2>
           </div>
         </div>
       </div>
       <div className="profile">
        <div className="cont">
          <div className="user_cont">
        <UserRound color='white' size={26} className='icon'/> 
        </div>
        <div className="user">
          <h2>{user?.firstName} {user?.lastName}</h2>
          <p>jamalmohideen971@gmail.com</p>
        </div>
        </div>
       </div>
    </div>
  )
}

export default Nav