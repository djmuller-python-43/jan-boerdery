import Link from "next/link"



const Button = ({ text, url }) => {
  return (
    <Link href={url} /*rel="noopener noreferrer" target="_blank"*/>
      <button className='border-[1px] border-solid border-red-700 hover:bg-red-900 hover:text-white p-5 rounded-md mt-2 transition ease-in-out duration-500'>
       { text }
      </button>
    </Link>
  )
}

export default Button