'use client';
import React, {useEffect, useState} from 'react'
import { Menu } from 'lucide-react'
import { Sections } from '../../interface/interface'
import { Flex } from '@chakra-ui/react';
import { Text  } from '@chakra-ui/react'
import Nav from '@/components/commonComponent/nav'
const Addsection: React.FC = () => {

  const [windowSize , setWindowSize] = useState(0);

  useEffect(()=>{
     setWindowSize(window.innerWidth)
  },[])

  const [section, setSection] = useState<Sections>({
    name: "" ,
    jobID: "" ,
    roleType: "" ,
    dueDate: "" ,
    description: ""
  })
  const [flag , setflag] = useState<boolean>(false)
  const APIREQ = () => {
    if(section.name.length===0 || section.jobID.length===0 || section.roleType.length===0 || section.dueDate.length===0 || section.description.length===0){
      setflag(true)
      alert("Enter All details properly... !")
    }else{
      setflag(false)
      alert("Success")
    }
  }

  const [navshow , setnavshow] = useState<boolean>(false)
  
  return (
    <Flex w='100vw' h='100vh' overflow='hidden' fontFamily='Poppins , sans-serif' className="dashboard bg-[#202029]" >
    <Nav navshow={navshow} setnavshow={setnavshow}/>
    <div className="base:w-[100%] md:w-[80%] bg-[#202029] text-white overflow-hidden h-[100vh] flex justify-start items-center flex-col select-none border-[1px] mt-[-1px] border-l-[#23232B]">
      <div className="head">
        <div className="">
        {windowSize < 810 && (
            <Menu size={23}/>
          )}
        <Text fontSize="1.3rem" fontWeight={600} as="h2">Add new Section</Text>
        </div>
        <button className='btn' onClick={(e)=>{
          e.preventDefault()
          APIREQ()
        }}>
          Create section
        </button>
      </div>
      <div className="line"></div>
        <div className="sectionaddform">
          <div className="form">
            <div className="rows">
              <div className="input-section">
                <p>Name of the JOb</p>
                <input type="text" style={section.name.length===0 && flag=== true ? {border:"2px solid #ff3333"} : {border:"2px solid rgba(209, 203, 203, 0.3)"}} value={section.name} onChange={(e)=>{
                  setSection({...section , name:e.target.value})
                }} />
              </div>
              <div className="input-section">
                <p>Job ID</p>
                <input type="text" style={section.jobID.length===0 && flag=== true ? {border:"2px solid #ff3333"} : {border:"2px solid rgba(209, 203, 203, 0.3)"}}  value={section.jobID} onChange={(e)=>{
                  setSection({...section , jobID:e.target.value})
                }} />
              </div>
            </div>
            <div className="rows" id='queue'>
              <div className="textarea-div">
                <p>Description</p>
                <textarea
      className='para'
      maxLength={100}
      cols={4}
      rows={4}
      value={section.description} style={section.description.length===0 && flag=== true ? {border:"2px solid #ff3333"} : {border:"2px solid rgba(209, 203, 203, 0.3)"}} onChange={(e)=>{
        setSection({...section , description:e.target.value})
      }}
    />
              </div>
              <div className="stack">
              <div className="input-section">
                <p>Role-Type</p>
                <input type="text" style={section.roleType.length===0 && flag=== true ? {border:"2px solid #ff3333"} : {border:"2px solid rgba(209, 203, 203, 0.3)"}} value={section.roleType} onChange={(e)=>{
                  setSection({...section , roleType:e.target.value})
                }}  />
              </div>
              <div className="input-section">
                <p>Due Date</p>
                <input 
                className='date'
                type="date" style={section.dueDate.length===0 && flag=== true ? {border:"2px solid #ff3333"} : {border:"2px solid rgba(209, 203, 203, 0.3)"}} value={section.dueDate} onChange={(e)=>{
                  setSection({...section , dueDate:e.target.value})
                }}  />
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </Flex>
  )
}

export default Addsection