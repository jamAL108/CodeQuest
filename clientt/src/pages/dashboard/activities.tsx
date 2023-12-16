import React, { useEffect ,useState} from 'react'
import '../../scss/dashboard/activities.scss'
import { RootState } from '../../redux';
import {motion} from 'framer-motion'
import { useSelector , useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchSections } from '../../redux/action';
import { Search , ListFilter , MoreHorizontal ,Plus ,Menu } from 'lucide-react';
import { user ,Sections } from '../../interface/interface';
import Data from './data'
import WarningIcon from '@mui/icons-material/Warning';

const Activities = () => {
  const dispatch: Dispatch<any> = useDispatch()
  const [data , setdata] = useState<Sections[]>([]);
  const store = useSelector((state: RootState)=>state)
  useEffect(()=>{
    const user_string: string | null = localStorage.getItem("codeQuestUSER")
    const user: user | null = user_string ?  JSON.parse(user_string) : null
    const dataa ={
      id:user?._id
    }
    dispatch(fetchSections(dataa))
  },[])
  useEffect(()=>{
    if(store.user.sections.length!==0){
      console.log(store.user.sections.Sections)
      console.log("HELLOOO")
      setdata(store.user.sections.Sections)
    }
  },[store?.user?.sections])
  return (
    <div className='activites'>
      <motion.div className="upper" initial={{ scale:0 , opacity:0}}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, scale: 1 }} transition={{ type: 'tween' }}>
          <div className="left">
          {window.innerWidth < 810 && (
            <Menu size={23}/>
          )}
            <h2>Dashboard</h2>
          </div>
          <button className='btn'>
           <Plus color='#202029' size={18}/> Add new Section
          </button>
      </motion.div>
      <motion.div className="detail" initial={{ scale:0 ,opacity:0}}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, scale: 1 }} transition={{ type: 'tween' }}>
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
      </motion.div>

      <motion.div className="ACcontent" initial={{ scale:0 , opacity:0}}
    viewport={{ once: true }}
    whileInView={{ opacity: 1, scale: 1 }} transition={{ type: 'tween' }}>
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
               {data && data.length!==0 ? (
                 data?.map((item,idx)=>(
                 <div className="box">
                 <div className="name" id='col'>
                   <p>{item?.name}</p>
                 </div>
                 <div className="jobID" id='col'>
                   <p>{item?.jobID}</p>
                 </div>
                 <div className="duedate" id='col'>
                   <p>{item?.roleType}</p>
                 </div>
                 <div className="duedate" id='col'>
                   <p>{item?.dueDate}</p>
                 </div>
                 <div className="status" id='col'>
                   <p style={item?.status===true ? {backgroundColor:"#283236" , color:"#65BA9E"} : {backgroundColor:"#353033" ,color:"#BB9870"}}>{item?.status=== true ? "Completed" : "Pending"}</p>
                 </div>
                 <div className="actions" id='col'>
                   <MoreHorizontal />
                 </div>
               </div>
               ))) : (
                <div className="no_section">
                  <WarningIcon className='icon'/>
                  <h2> No Section Found</h2>
                  <button className='btn'>
                  <Plus color='#202029' size={18}/> Add new Section
                  </button>
                </div>
               )}
            </div>
          </div>
       </div>
       <div className="full">

       </div>
    </motion.div>
    </div>
  )
}

export default Activities