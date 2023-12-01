import '../../scss/dashboard/dashboard.css'
import Nav from './nav'
import React,{useState , useEffect} from 'react';
import Activities from './activities'
import Settings from './settings'

const Dashboard: React.FC = () => {
  const [flag, setflag] = useState(0);
  const flagchange=(str: string)=>{
     if(str==="activities"){
      setflag(0)
     }else if(str==='settings'){
      setflag(1);
     }
  }
  return (
    <div className="dashboard">
      <Nav flagfun={flagchange} flag={flag}/>
      {flag===0 && (
        <Activities/>
      )}
      {flag===1 && (
        <Settings/>
      )}
    </div>
  )
}

export default Dashboard;