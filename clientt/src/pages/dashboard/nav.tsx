import React from 'react'
import '../../scss/dashboard/dashboard.nav.css'
import Logo from '../../images/mainlogog.png'
import { AlignRight , LayoutDashboard ,ListPlus , Settings ,UserRound   } from 'lucide-react'; 

const Nav = () => {
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
         <div className="top">
         <ListPlus color='#AD9BF5' className='icon' size={30}/>
         <h2>Add new Section</h2>
         </div>
         <div className="line"></div>
         <div className="bottom">
           <div className="dash">
            <div className="upper">
             <div className="boxy">
              <LayoutDashboard color='#F0A65D' size={25}/>
             </div>
             </div>
             <h2>Dashboard</h2>
           </div>
           <div className="dash">
           <div className="upper">
           <div className="boxy">
              <Settings color='#87CAF6' size={25}/>
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
          <h2>Jamal Mydeen</h2>
          <p>jamalmohideen971@gmail.com</p>
        </div>
        </div>
       </div>
    </div>
  )
}

export default Nav