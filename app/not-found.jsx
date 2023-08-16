import Link from 'next/link'
 
export default function notFound() {
  return (
    <div className='mt-48 text-center'>
      <h2 className='text-5xl'>Not Found</h2>
      <p className='text-3xl mb-20'>Could not find requested resource</p>
    </div>
  )
}