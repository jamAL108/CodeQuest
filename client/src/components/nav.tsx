"use client"
import React from 'react'
import styles from '../scss/components/nav.module.scss';
const Nav: React.FC = () => {
  return (
    <div className={styles.Nav}>
      <div className={styles.content}>
        
      </div>
      <div className={styles.right}>
        <button className={styles.signin}>Sign in</button>
        <button className={styles.signup}>Sign up</button>
      </div>
    </div>
  )
}

export default Nav