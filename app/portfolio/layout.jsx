import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Portfolio',
  description: 'This is Duane Muller\'s Web Design awesome portfolio',
}

const Layout = ({ children }) => {
  return (
    <div className='pt-32 lg:flex lg:flex-col lg:items-center'>
      <Link href='/portfolio'>
        <h1 className='text-5xl text-center'>My Works</h1>
      </Link>
      { children }
    </div>
  )
}

export default Layout