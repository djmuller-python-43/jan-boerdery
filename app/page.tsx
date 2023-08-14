import Image from 'next/image'
import Hero from 'public/hero.png'
import Button from './(shared)/Button'


export default function Home() {
  return (
   <div className='mt-20 p-5 pt-10 text-center md:flex md:items-center md:gap-5 md:text-left lg:gap-12 z-0'>
    <div className='md:flex-1 md:flex md:flex-col md:gap-5 lg:gap-12'>
      <h1 className='text-6xl mb-2 font-bold
      bg-clip-text text-transparent bg-gradient-to-b from-[#ff6741] to-[#0b2341] md:text-7xl md:mb-0 lg:text-8xl '>Hi, I&apos;m Duane</h1>
      <h2 className='text-2xl mb-2 font-light md:text-3xl md:mb-0 lg:text-4xl'>Full Stack Web Developer (NextJS)</h2>
      <p className='md:text-lg mb-2 md:mb-0 lg:text-xl'>Turning your ideas into reality, using the latest web technologies.</p>
      <Button url='/portfolio' text='See My Work'/>
    </div>
    <div className='md:flex-1 md:flex md:flex-col md:gap-5'>
      <Image src={ Hero } className='w-full mt-5 img' alt='Good looking guy with a beard and glasses'/>
    </div>
  </div>
  )
}
