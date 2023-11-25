import Nav from '../components/nav';
import styles from  '../scss/pages/home.module.scss'
import HomeAsk from '@/components/home.ask';
export default function Home() {
  return (
    <div className={styles.main}>
      <Nav/>
      <div className={styles.content}>
        <div className={styles.line}>
           <div className={styles.round}>
           </div>
           <div className={styles.blue}>
           </div>
           <div className={styles.code}>
           <img src="/images/symbol.png " className={styles.img} alt="" />
           </div>
           <div className={styles.green}>

           </div>
        </div>
        <div className={styles.info}>
          <div className={styles.up}>
          <h1>Seamless Interviews, Anywhere, Anytime</h1>
          <h3>The world’s leading AI-powered developer platform.</h3>
          </div>
          <HomeAsk/>
          <div className={styles.partner}>
            <h3>Trusted by the world’s leading organizations ↘️</h3>
            <div className={styles.company}>
                <img src="/images/kpmg.svg" alt="edv" />
                <img src="/images/kpmg.svg" alt="edv" />
                <img src="/images/kpmg.svg" alt="edv" />
                <img src="/images/kpmg.svg" alt="edv" />
                <img src="/images/kpmg.svg" alt="edv" />
                <img src="/images/kpmg.svg" alt="edv" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h1>hello</h1>
      </div>
        <div className={styles.image}>
        <img 
        src='/images/homeback.png'
        alt="My Image"
      />
      <div className={styles.shadow}></div>
      </div>
    </div>
  )
}
