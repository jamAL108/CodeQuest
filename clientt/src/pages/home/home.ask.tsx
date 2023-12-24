import React,{useState} from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link, useNavigate } from 'react-router-dom';
import { EMAIL } from '../../redux/actionTypes';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { Box , Button , Text  , Input } from '@chakra-ui/react';
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
    <Box marginTop='4%' width='95%' height='35px' display='flex' justifyContent='flex-start' alignItems='center'>


        <Box width='55%' paddingRight='20px' height='100%' borderRight='0.7px solid grey' display='flex'>

           <Input bg='accent.light' borderRadius='none' borderBottomLeftRadius='4px' borderTopLeftRadius='4px' 
           outline='none' paddingLeft='10px'
           width='60%' height='full' 
           _hover={{border:"1px solid #0070f3"}}
           _placeholder={{fontSize:'0.85rem'}}
           fontSize='0.9rem'
           color='black'
            type="text" placeholder='Enter email address' value={email} onChange={(e)=>{
            setemail(e.target.value)
           }}/>


           <Button 
           height='full'
           width='40%'
           bg="outbutton.bg"
           transition='0.3s ease'
           _hover={{bg:"outbutton.hover"}}
           borderBottomRightRadius='4px' 
           borderTopRightRadius='4px' 
           fontSize='0.8rem'
           fontWeight={450}
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
    
        </Box>



        <Box paddingLeft='20px' width='110px' height='full'>
           <Link className='link' style={Linkstyle} to="/auth/signin">Sign in  <KeyboardArrowRightIcon/></Link>
        </Box>
    </Box>
  )
}

export default  HomeAsk