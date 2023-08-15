import Link from "next/link"



const Button = ({ text, url }) => {
  return (
    <Link href={url} /*rel="noopener noreferrer" target="_blank"*/>
      <button className='bg-[#B05842] p-5 rounded-md mt-2'>
       { text }
      </button>
    </Link>
  )
}

export default Button