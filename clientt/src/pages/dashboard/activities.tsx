import React from 'react'
import '../../scss/dashboard/activities.scss'
import { Plus   } from 'lucide-react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Content from './activity.content';
const Activities = () => {
  const str='>';
  return (
    <div className='activites'>
      <div className="upper">
          <h2>Dashboard</h2>
          <button className='btn'>
           <Plus color='#202029' size={21}/> Add new Section
          </button>
      </div>
      <div className="detail">
        <div className="left">
           <h2>Total Interviews</h2>
           <h1>123</h1>
        </div>
        <div className="middle">
           <div className='icon'></div>
        </div>
        <div className="right">
           <div className="complete">
           <h2>Completed</h2>
           <h1>34</h1>
           </div>
           <div className="complete">
           <h2>Pending</h2>
           <h1>56</h1>
           </div>
        </div>
      </div>
      <Content/>
    </div>
  )
}

export default Activities