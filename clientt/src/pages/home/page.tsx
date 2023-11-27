import React,{useEffect,useState} from 'react';
import Nav from './nav';
import HomeAsk from './home.ask';
import '../../scss/home/home.css';
import Symbol from '../../images/symbol.png'
import Kpmg from '../../images/kpmg.svg'
import Homeback from '../../images/homeback.png'
import Homeback1 from '../../images/homeback1.png'
const Home: React.FC  =()=> {
  const [ fla,setfla] = useState<boolean>(false);
  useEffect(()=>{
   console.log("heloo")
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
           <img src={Symbol} className="img" alt="" />
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
        alt="My Image"
      />
      )}
      {fla===true && (
                <img 
                src={Homeback1}
                alt="My Image"
              />
      )}
      <div className="shadow"></div>
      </div>
    </div>
  )
}

export default Home;
