import React from 'react'
import { Search , ListFilter , MoreHorizontal } from 'lucide-react';
import Data from './data'
const Content = () => {
  return (
    <div className="ACcontent">
       <div className="small">
          <div className="nav">
            <p className='nav-item active'>All</p>
            <p className='nav-item'>completed</p>
            <p className='nav-item'>pending</p>
          </div>
          <div className="search">
            <div className="box">
                <Search color='white' className='icon' size={15} />
                <input type="text" placeholder='Search'/>
            </div>
            <div className="filter">
                <ListFilter size={15} color='white'/>
                <p>filter</p>
            </div>
          </div>
          <div className="table">
            <div className="up">
              <div className="name" id='col'>
                <p>Name</p>
              </div>
              <div className="jobID" id='col'>
                <p>job id</p>
              </div>
              <div className="duedate" id='col'>
                <p>Role Type</p>
              </div>
              <div className="duedate" id='col'>
                <p>Due Date</p>
              </div>
              <div className="status" id='col'>
                <p>status</p>
              </div>
              <div className="actions" id='col'>
                <p>Actions</p>
              </div>
            </div>
            <div className="Tablemain">
               {Data.map((item,idx)=>(
                 <div className="box">
                 <div className="name" id='col'>
                   <p>{item.name}</p>
                 </div>
                 <div className="jobID" id='col'>
                   <p>{item.jobid}</p>
                 </div>
                 <div className="duedate" id='col'>
                   <p>{item.roleType}</p>
                 </div>
                 <div className="duedate" id='col'>
                   <p>{item.duedate}</p>
                 </div>
                 <div className="status" id='col'>
                   <p style={item.status===1 ? {backgroundColor:"#283236" , color:"#65BA9E"} : {backgroundColor:"#353033" ,color:"#BB9870"}}>{item.status=== 1 ? "Completed" : "Pending"}</p>
                 </div>
                 <div className="actions" id='col'>
                   <MoreHorizontal />
                 </div>
               </div>
               ))}
            </div>
          </div>
       </div>
       <div className="full">

       </div>
    </div>
  )
}

export default Content