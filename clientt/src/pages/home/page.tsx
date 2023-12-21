import React,{useEffect,useState} from 'react';
import Nav from './nav';
import HomeAsk from './home.ask';
import '../../scss/home/home.css';
import Symbol from '../../images/symbol.png'
import Kpmg from '../../images/kpmg.svg'
import Homeback from '../../images/homeback.png'
import Homeback1 from '../../images/homeback1.png'
import { useCookies } from "react-cookie";
import { useDispatch  } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { verifyCookie } from '../../redux/action';
import { Dispatch } from 'redux';
import { Button , Text , Box , Image } from '@chakra-ui/react';

const Home: React.FC  =()=> {
  useEffect(() => {
    // Update document title when component mounts
    document.title = 'codeQuest - Home';
    // Clean up document title when component unmounts
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, []);
  const dispatch: Dispatch<any> = useDispatch()
  const navigate = useNavigate()
  const [cookies, removeCookie] = useCookies([]);
  const [ fla,setfla] = useState<boolean>(false);
  useEffect(()=>{
   dispatch(verifyCookie(navigate,removeCookie,false))
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(()=>{
    if(window.innerWidth<700){
      setfla(true)
    }else{
      setfla(false)
    }
  },[])
  return (
    <Box 
    className='main'
    color='accent.light'
    width="100%"
    height="auto"
    minH="100vh"
    bg="backG.home"
    overflowY="scroll"
    overflowX="hidden"
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    css={{
      "&::-webkit-scrollbar": {
        width: "0 !important", 
      },
      scrollbarWidth: "none", 
    }}
    >
    <Nav/>


      <Box 
      width="60%"
      marginTop="calc(30vh - 4.3rem)"
      marginRight="10rem"
      height="74vh"
      display="flex"
      gap={2}
      >
        <Box className="line"
         width="3%" height="full" display="flex" justifyContent="flex-start" alignItems="center" flexDirection="column"
        >
          <Box className="round"
          border="1.955px  solid grey" borderRadius="50%" width="30%" height="8px"></Box>

           <Box className="blue" width='3px' height='55%' 
            bg="linear-gradient(transparent, #7c72ff 30%)"></Box>

           <Box className="code"
           w='60px'
           height='60px'
           borderRadius='50%'
           display="flex"
           justifyContent="center"
           alignItems="center"
           bg={`url('../../images/Ellipse.png')`}
           >
           <Image src={Symbol} width='50%' height='80%' alt="fg" />
           </Box>

           <Box className="green"
           width="3px"
           height="55%"
           bg="linear-gradient(#7c72ff, #2da44e 80%, #3fb950)"
           >
           </Box>
        </Box>




        <Box 
        width="93%" height="full" display="flex" justifyContent="flex-start" alignItems="center" flexDirection="column"
        >


          <Box  width='95%'  fontFamily='body' >
            <Text
            as='h1'  lineHeight="1.3" fontWeight={600} fontSize='3.66rem' marginBottom='0.4rem' marginTop='-0.6rem'       
            >Seamless Interviews, Anywhere, Anytime</Text>
          <Text as='h3' fontSize='1.1rem' opacity={0.7} fontWeight={340} marginTop='0rem'>The world’s leading AI-powered developer platform.</Text>
          </Box>


          <HomeAsk/>
          <Box marginTop='6%' width='95%' height='120px' display='flex'
          justifyContent='flex-start' alignItems='flex-start' flexDirection='column'>
            <Text as='h3' fontSize='1.1rem' fontWeight={380} opacity={0.7} marginTop={0} >Trusted by the world’s leading organizations ↘️</Text>
            <Box width='full' height='80%' gap='20px' display='flex'
          justifyContent='center' alignItems='center' >
                <Image filter='grayscale(100%)' src={Kpmg} alt="edv" />
                <Image filter='grayscale(100%)' src={Kpmg} alt="edv" />
                <Image filter='grayscale(100%)' src={Kpmg} alt="edv" />
                <Image filter='grayscale(100%)' src={Kpmg} alt="edv" />
                <Image filter='grayscale(100%)' src={Kpmg} alt="edv" />
                <Image filter='grayscale(100%)' src={Kpmg} alt="edv" />
            </Box>
          </Box>
        </Box>


      </Box>


      <div className="content">
        <h1>hello</h1>
      </div>
        <div className="image">
       {fla===false && (
        <img 
        src={Homeback}
        alt="Myage"
      />
      )}
      {fla===true && (
                <img 
                src={Homeback1}
                alt="Myage"
              />
      )}
      <div className="shadow"></div>
      </div>
    </Box>
  )
}

export default Home;
