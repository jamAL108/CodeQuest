"use client"
import React,{useState} from 'react'
import styles from '../scss/components/nav.module.scss';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Nav: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const open = Boolean(anchorEl);
  const handleClick:React.MouseEventHandler<HTMLHeadingElement> = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
      <div className={styles.right}>
        <button className={styles.signin}>Sign in</button>
        <button className={styles.signup}>Sign up</button>
      </div>
    </div>
  )
}

export default Nav