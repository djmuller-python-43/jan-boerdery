import Image from 'next/image'
import GreenBeans from 'public/greenbeans.png'
import Button from './(shared)/Button'


export default function Home() {
  return (
   <div className='max-w-screen-2xl mx-auto mt-20 p-5 pt-10 text-center md:flex md:items-center md:gap-5 md:text-left lg:gap-12 z-0'>
    <div className='md:flex-1 md:flex md:flex-col md:gap-5 lg:gap-12 '>
      <h1 className='text-5xl mb-1 font-bold
      bg-clip-text text-transparent bg-gradient-to-b from-[#1af206] to-[#0ecc73] md:text-7xl md:mb-0 lg:text-7xl xl:text-8xl'>FARM FRESHNESS</h1>
      <h2 className='text-2xl mb-1 font-light md:text-3xl md:mb-0 lg:text-4xl'>Fresh from the farm to your table</h2>
      <p className='md:text-lg mb-1 md:mb-0 lg:text-xl'>From the greenest greenbeans to the reddest tomatoes, we have the freshes products coming straight from the earth.</p>
      <Button url='/products' text='Products'/>
    </div>
    <div className='md:flex-1 md:flex md:flex-col md:gap-5'>
      <Image src={ GreenBeans } className='w-full mt-5 img' alt='Good looking guy with a beard and glasses'/>
    </div>
  </div>
  )
}
