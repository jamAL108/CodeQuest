'use client';
import React,{useState} from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useRouter } from "next/navigation";
import { EMAIL } from '../../redux/actionTypes';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { Box , Button   ,  Flex , Input } from '@chakra-ui/react';

const  HomeAsk = () => {
  const [email,setemail] =useState("")
  const dispatch: Dispatch<any> = useDispatch()
  const router  = useRouter()

  const Linkstyle = {
    backgroundColor:'transparent',
    border: "1.7px solid #753fc8",
    borderRadius:"4px",
    height:'100%',
    paddingLeft:'1px',
    paddingRight:"7px",
    width:'100%',
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    gap:'0px',
    fontSize:"0.9rem",
    fontWeight:"550",
    cursor:"pointer",
    zIndex:0,
    textDecoration:'none'
  }


  return (
    <Flex zIndex={0} marginTop={{base:'4%',md:'4%'}} width='95%' height={{base:'auto',md:'35px' }} justify='flex-start' align='center' 
    direction={{base:'column',md:'row'}}
    gap={{base:'0.8rem',md:0}}
    >

        <Flex width={{base:'100%',md:'390px'}} paddingRight={{base:0,md:'20px' }}  height={{base:'auto',md:'100%'}} 
        borderRight={{base:'none',md:'0.7px solid grey'}} gap={{base:'0.8rem',md:0}} direction={{base:'column',md:'row'}} >

           <Input bg='accent.light' borderRadius={{base:'4px',md:'none' }}
           borderBottomLeftRadius='4px' borderTopLeftRadius='4px' 
           outline='none' paddingLeft='10px'
           width={{base:'95%',md:'60%'}}
            height={{base:'3.07rem',md:'full' }}
           _hover={{border:"1px solid #0070f3"}}
           _placeholder={{fontSize:'0.85rem'}}
           fontSize={{base:'1rem',md:'0.9rem'}}
           color='black'
            type="text" placeholder='Enter email address' value={email} onChange={(e)=>{
            setemail(e.target.value)
           }}/>


           <button 
           className='text-white bg-[#753fc8] base:h-[3.07rem] md:h-full base:w-[95%] md:w-[40%] tranition-[0.3] duration-[ease] hover:bg-[#6336a8]  base:rounded-[4px] md:rounded-none 
           base:text-[0.95rem] md:text-[0.8rem] base:font-[550] md:font-[450] rounded-r-[4px]'
           onClick={(e)=>{
            e.preventDefault()
            if(email.length===0 || !email.includes('@')){
              alert("Enter your email properly")
            }else{
              dispatch({type:EMAIL,payload:email})
              router.push('/auth/signup')
            }
           }}>
            Signup for codeQuest
           </button>
    
        </Flex>



        <Box paddingLeft={{base:0,md:'20px'}} width={{base:'100%',md:'110px'}} height={{base:'auto',md:'full'}} >

           <button  
           className='text-white bg-transparent border-[1.7px] border-[#753fc8] rounded-[4px] base:h-[3.07rem] md:h-[100%] base:pl-0 md:pl-[1px] base:pr-0 md:pr-[7px] base:w-[95%] md:w-[100%] flex justify-center items-center gap-0 base:text-[1.04rem] md:text-[0.9rem] font-[550] cursor-pointer z-0 transition-[0.3] duration-[ease]  hover:border-white'
            onClick={(e)=>{
            e.stopPropagation()
            e.preventDefault()
            router.push("/auth/signin")
           }}>Sign in  <KeyboardArrowRightIcon/></button>
        </Box>

    </Flex>
  )
}

export default  HomeAsk