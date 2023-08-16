import React from 'react'
import type { Metadata } from 'next'
import styles from './page.module.css'
import { Roboto } from 'next/font/google'


type Props = {}

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jan\'s Boerdery | Products',
  description: 'Jan\'s Boerdery is about bringing the freshes greenbeans. Fresh from the farm to your table. Check out our latest products.',
}



const Product = (props: Props) => {
  return (
    <div>
    <h1 className='mt-32 text-center text-2xl'>Our Products</h1>
    <div className='flex flex-col items-center mt-10 gap-y-5 mb-20 lg:flex lg:flex-row lg:mx-5 lg:gap-5'>
      <div className={ styles.item }>
        <span className='absolute top-[10px] left-[30px] text-[#48fff0] md:right-[15px] text-3xl md:text-xl font-bold'>Greenbeans</span>
      </div>
      <div className={ styles.item }>
        <span className='absolute top-[10px] left-[30px] text-[#d73434]  md:right-[10px] text-3xl md:text-xl font-bold'>Tomatoes</span>
      </div>
      <div className={ styles.item }>
        <span className='absolute top-[10px] left-[30px] text-[#883fff]  md:right-[10px] text-3xl md:text-xl font-bold'>Plums</span>
      </div>
      <div className={ styles.item }>
        <span className='absolute top-[10px] left-[30px] text-[#ffdd45]  md:right-[10px] text-3xl md:text-xl font-bold'>Peaches</span>
      </div>
      <div className={ styles.item }>
        <span className='absolute top-[10px] left-[30px] text-[#ffbe46]  md:right-[10px] text-3xl md:text-xl font-bold'>Apricots</span>
      </div>
    </div>
  </div>
  )
}

export default Product