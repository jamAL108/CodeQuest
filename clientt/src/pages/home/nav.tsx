import React,{useState , useEffect} from 'react'
import '../../scss/home/nav.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../../images/mainlogog.png'
import { useNavigate } from 'react-router-dom';
const Nav: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const open = Boolean(anchorEl);
  const handleClick:React.MouseEventHandler<HTMLHeadingElement> = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [flag , setflag] = useState<boolean>(true);
  const [nav , setnav] = useState<boolean>(false);
  const Navigate = useNavigate();
  useEffect(()=>{
    if(window.innerWidth<=700){
      setflag(true)
      console.log(window.innerWidth)
    }else{
      console.log("lesser")
      setflag(false)
    }
  },[])
  return (
    <div className="Nav">
      <div className="Navcontent">
        <div className="logo">
          <img src={Logo} className='img' alt="dfbg" />
          <h2>codeQuest</h2>
        </div>
        <h2 className="btn">About us</h2>
        <h2 className="btn">Contact</h2>
        <h2 className="btn" onMouseOver={handleClick} id='btn'>
        Others <KeyboardArrowDownIcon className="icon"/>
      </h2>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Github Repo</MenuItem>
        <MenuItem onClick={handleClose}>Cookie Policy</MenuItem>
        <MenuItem onClick={handleClose}>FaQs</MenuItem>
        <MenuItem onClick={handleClose}>Terms & condition</MenuItem>
      </Menu>
      </div>
      <div className="right" onClick={(e)=>{
            e.preventDefault()
            e.stopPropagation()
          }}>
        {flag===false &&  (
          <button className="signin" onClick={(e)=>{
            e.preventDefault()
            e.stopPropagation()
            Navigate('/auth/signin')
          }}>Sign in</button>
        )}
        <button className="signup" onClick={(e)=>{
          e.preventDefault()
          e.stopPropagation()
          Navigate('/auth/signup')
        }}>Sign up</button>
        {flag === true && nav===false && (
          <MenuIcon className="ico" onClick={(e)=>{
            e.preventDefault()
            e.stopPropagation()
            setnav(true)
          }}/>
        )}
        {flag === true && nav===true && (
          <CloseIcon className="ico" onClick={(e)=>{
            e.preventDefault()
            e.stopPropagation()
            setnav(false)
          }}/>
        )}
      </div>

      
      {flag===true && nav===true && (
        <div className="show">
        <h2 className="btn">About us</h2>
        <h2 className="btn">Contact</h2>
<h2 className="btn" onClick={handleClick}>Dashboard <KeyboardArrowDownIcon className="icon"/>
</h2>
</div>
      )}


    </div>
  )
}

export default Nav
