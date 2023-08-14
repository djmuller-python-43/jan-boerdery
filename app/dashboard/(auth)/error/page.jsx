'use client'
import Link from 'next/link'
import styles from './page.module.css'



const Error = () => {
  
  

  return (
    <div className={ styles.container }>
      <h1>Access Denied</h1>
      <p>Please contact the Web Administrator for more info</p>
      <p>
        Return to <Link className={styles.link} href='/'>Home Page</Link>
      </p>
    </div>
  )
}

export default Error