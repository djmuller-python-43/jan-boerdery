import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Portfolio',
  description: 'This is Duane Muller\'s Web Design awesome portfolio',
}

const Layout = ({ children }) => {
  return (
    <div>
      <Link href='/portfolio'>
        <h1 className='md:my-5 md:mx-[14px] pt-28 md:pt-28 text-5xl text-center md:text-left md:ml-[14px]'>My Works</h1>
      </Link>
      { children }
    </div>
  )
}

export default Layout