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
    <div className="main">
    <Nav/>
      <div className="content">
        <div className="line">
           <div className="round">
           </div>
           <div className="blue">
           </div>
           <div className="code">
           <img src={Symbol} className="img" alt="fg" />
           </div>
           <div className="green">

           </div>
        </div>
        <div className="info">
          <div className="up">
          <h1>Seamless Interviews, Anywhere, Anytime</h1>
          <h3>The world’s leading AI-powered developer platform.</h3>
          </div>
          <HomeAsk/>
          <div className="partner">
            <h3>Trusted by the world’s leading organizations ↘️</h3>
            <div className="company">
                <img src={Kpmg} alt="edv" />
                <img src={Kpmg} alt="edv" />
                <img src={Kpmg} alt="edv" />
                <img src={Kpmg} alt="edv" />
                <img src={Kpmg} alt="edv" />
                <img src={Kpmg} alt="edv" />
            </div>
          </div>
        </div>
      </div>
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
    </div>
  )
}

export default Home;
