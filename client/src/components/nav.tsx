"use client";
import React,{useState , useEffect} from 'react'
import styles from '../scss/components/nav.module.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Nav: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const open = Boolean(anchorEl);
  const handleClick:React.MouseEventHandler<HTMLHeadingElement> = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [flag , setflag] = useState<boolean>(false);
  const [nav , setnav] = useState<boolean>(false);
  useEffect(()=>{
    if(window.innerHeight>=700){
      setflag(true)
    }else{
      setflag(false)
    }
  },[])
  return (
    <div className={styles.Nav}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src="/images/mainlogog.png" alt="dfbg" />
          <h2>codeQuest</h2>
        </div>
        <h2 className={styles.btn}>About us</h2>
        <h2 className={styles.btn}>Contact</h2>
        <h2 className={styles.btn} onClick={handleClick}>
        Dashboard <KeyboardArrowDownIcon className={styles.icon}/>
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
      <div className={styles.right} onClick={(e)=>{
            e.preventDefault()
            e.stopPropagation()
          }}>
        <button className={styles.signup} onClick={(e)=>{
          e.preventDefault()
          e.stopPropagation()
        }}>Sign up</button>
        {flag === true && nav===false && (
          <MenuIcon className={styles.ico} onClick={(e)=>{
            e.preventDefault()
            e.stopPropagation()
            setnav(true)
          }}/>
        )}
        {flag === true && nav===true && (
          <CloseIcon className={styles.ico} onClick={(e)=>{
            e.preventDefault()
            e.stopPropagation()
            setnav(false)
          }}/>
        )}
        {flag===false &&  (
          <button className={styles.signin} onClick={(e)=>{
            e.preventDefault()
            e.stopPropagation()
          }}>Sign in</button>
        )}
      </div>

      
      {flag===true && nav===true && (
        <div className={styles.show}>
        <h2 className={styles.btn}>About us</h2>
        <h2 className={styles.btn}>Contact</h2>
<h2 className={styles.btn} onClick={handleClick}>Dashboard <KeyboardArrowDownIcon className={styles.icon}/>
</h2>
</div>
      )}


    </div>
  )
}

export default Nav