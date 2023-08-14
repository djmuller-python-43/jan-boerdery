import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Duane Muller | Portfolio',
  description: 'Portfolio page for Duane Muller Web Design',
}

const Portfolio = () => {
  return (
    <div>
      <h1 className='text-center text-xl my-3 md:text-left md:ml-[14px]'>Choose A Gallery</h1>
      <div className='flex flex-col items-center gap-y-5 mb-5 md:flex md:flex-row md:ml-[5px]md:mr-[5px] md:mx-2 md:gap-2'>
        <Link href='/portfolio/logos' className={ styles.item }>
          <span className='absolute bottom-3 right-[105px] md:right-[15px] text-3xl md:text-xl font-bold'>Logos</span>
        </Link>
        <Link href='/portfolio/websites' className={ styles.item }>
          <span className='absolute bottom-3 right-[90px] md:right-[10px] text-3xl md:text-xl font-bold'>Websites</span>
        </Link>
        <Link href='/portfolio/applications' className={ styles.item }>
          <span className='absolute bottom-3 right-[65px] md:right-[10px] text-3xl md:text-xl font-bold'>Applications</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio