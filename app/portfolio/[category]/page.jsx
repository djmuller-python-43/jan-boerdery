
import styles from './page.module.css'
import Image from 'next/image';
import { items } from './data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Button from '@/app/(shared)/Button';
const getData = (cat) => {
  const data = items[cat]

  if(data) return data

  return notFound()
}

const Category = ({ params }) => {
  const data = getData(params.category)
  return (
    <div className='mb-10 max-w-screen-2xl mx-auto'>
      <h1 className='text-center text-[#B05842] mt-5 text-2xl uppercase '>{ params.category }</h1>
      { data.map(item => (
        <div className='text-center mx-5 md:flex md:gap-[50px] md:mt-[50px] md:mb-[100px] md:flex-row-reverse md:mr-10' key={item.id}>
          <div className={ styles.imgContainer }>
            <Image className='object-cover mt-5 mb-5' src={ item.image } alt='Duane Logo' fill={ true }/>
          </div>
          <div className='mx-5 justify-center md:flex-1'>
            <h1 className='text-3xl my-10'>{ item.title }</h1>
            <p className='text-xl mb-5'>{ item.desc }</p>
            <Button text='LOGO.com' url='https://logo.com'/>
          </div>
        </div>  
      )) }
    </div>
  )
}

export default Category