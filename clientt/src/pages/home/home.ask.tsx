import React,{useState} from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link, useNavigate } from 'react-router-dom';
import { EMAIL } from '../../redux/actionTypes';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { Box , Button , Text  ,  Flex , Input } from '@chakra-ui/react';
const  HomeAsk = () => {
  const [email,setemail] =useState("")
  const dispatch: Dispatch<any> = useDispatch()
  const navigate  = useNavigate()

  const Linkstyle ={
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
    <Flex marginTop={{base:'4%',md:'4%'}} width='95%' height={{base:'auto',md:'35px' }} justify='flex-start' align='center' 
    direction={{base:'column',md:'row'}}
    gap={{base:'0.87rem',md:0}}
    >

        <Flex width={{base:'100%',md:'55%'}} paddingRight={{base:0,md:'20px' }}  height={{base:'auto',md:'100%'}} 
        borderRight={{base:'none',md:'0.7px solid grey'}} gap={{base:'0.87rem',md:0}} direction={{base:'column',md:'row'}} >

           <Input bg='accent.light' borderRadius={{base:'4px',md:'none' }}
           borderBottomLeftRadius='4px' borderTopLeftRadius='4px' 
           outline='none' paddingLeft='10px'
           width={{base:'95%',md:'60%'}}
            height={{base:'3.6rem',md:'full' }}
           _hover={{border:"1px solid #0070f3"}}
           _placeholder={{fontSize:'0.85rem'}}
           fontSize={{base:'1rem',md:'0.9rem'}}
           color='black'
            type="text" placeholder='Enter email address' value={email} onChange={(e)=>{
            setemail(e.target.value)
           }}/>


           <Button 
           height={{base:'3.6rem',md:'full'}}
           width={{base:'95%',md:'40%'}}
           bg="outbutton.bg"
           transition='0.3s ease'
           _hover={{bg:"outbutton.hover"}}
           borderRadius={{base:'4px',md:'none' }}
           borderBottomRightRadius='4px' 
           borderTopRightRadius='4px' 
           fontSize={{base:'0.95rem',md:'0.8rem'}}
           fontWeight={{base:550,md:450}}
           onClick={(e)=>{
            e.preventDefault()
            if(email.length===0 || !email.includes('@')){
              alert("Enter your email properly")
            }else{
              dispatch({type:EMAIL,payload:email})
              navigate('/auth/signup')
            }
           }}>
            Signup for codeQuest
           </Button>
    
        </Flex>



        <Box paddingLeft={{base:0,md:'20px'}} width={{base:'100%',md:'110px'}} height={{base:'auto',md:'full'}} >

           <Button  
            backgroundColor="transparent"
            border="1.7px solid #753fc8"
            borderRadius="4px"
            height={{base:'3.6rem',md:"100%"}}
            paddingLeft={{base:0,md:'1px'}}
            paddingRight={{base:0,md:"7px"}}
            width={{base:'95%',md:"100%"}}
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="0px"
            fontSize={{base:'1.04rem',md:"0.9rem"}}
            fontWeight="550"
            cursor="pointer"
            zIndex={0}
            onClick={(e)=>{
            e.stopPropagation()
            e.preventDefault()
            navigate("/auth/signin")
           }}>Sign in  <KeyboardArrowRightIcon/></Button>
        </Box>

    </Flex>
  )
}

export default  HomeAsk