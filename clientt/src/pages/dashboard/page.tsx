import '../../scss/dashboard/dashboard.css'
import Nav from './nav'
import React,{useState , useEffect} from 'react';
import Activities from './activities'
import Settings from './settings'

const Dashboard = () => {
  const [flag, setflag] = useState(0);
  return (
    <div className="dashboard">
      <Nav/>
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