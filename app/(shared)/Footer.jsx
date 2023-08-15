import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='h-[50px] max-w-screen-2xl mx-auto text-sm text-center'>
      <div>&copy; 2023 Duane Muller Web Design. All Rights Reserved.</div>
      <div className='pl-8 pt-1 sm:flex sm:items-center sm:gap-2 md:pr-6'>
        <Link href='https://www.facebook.com/duanemullerwebdesign' rel="noopener noreferrer" target="_blank" className='mb-10 md:mb-2'>
          <Image src='/1.png' width={15} height={15} alt='Duane Muller Web Design Facebook Account' className='opacity-60 cursor-pointer'/>
        </Link>
      </div>
    </div>
  )
}

export default Footer