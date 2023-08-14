'use client'
import styles from './page.module.css'
import { signIn } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'


const Login = () => {

  const session = useSession()
  const router = useRouter()

  if(session.status === 'loading') {
    return <p>Loading...</p> // provide a better loading skeleton or loading spinner
  }

  if(session.status === 'authenticated') {
    router?.push('/dashboard')
  }


  return (
    <div className={ styles.container }>
      <button onClick={() => signIn('Google')} className={styles.button}>Login with Google</button>
    </div>
  )
}

export default Login