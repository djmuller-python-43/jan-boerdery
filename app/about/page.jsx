import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/app/(shared)/Button';


export const metadata = {
  title: 'Jan\'s Boerdery | About',
  description: 'About page for Duane Muller Web Design',
}

const About = () => {
  return (
    <div className='max-w-screen-sm mx-5 mb-32 md:mx-auto mt-32'>
      <div className='text-center'>
        <div className={ styles.item }>
          <h1 className='text-2xl'>Who am I?</h1>
          <p className='text-center text-xl'>Hi, I&apos;m Janneman Swanepoel and I&apos;m a farmer with a green thumb. 
          <br />
          I love spending time outdoors and growing things from the ground up. 
          <br />
          Working in nature is something that brings me great joy and satisfaction.
          <br />
          I love to see plants flourish under my care, as well as the food that comes from them. 
          <br />
          Farming is also a great way to connect with nature on a deeper level, which makes it even more rewarding for me.</p>
        </div>
      </div>
    </div>
  )
}

export default About