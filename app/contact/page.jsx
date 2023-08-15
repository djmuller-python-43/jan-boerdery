'use client'
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from "react";


const Contact = () => {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('it works');

    if(fullname === '' || email === '' || message === '') {
      toast.error('please fill in all fields')
      return
    }

    if(fullname.length < 2) {
      toast.error('Name must be at least 2 characters long')
      return
    }

    if(fullname.length > 50) {
      toast.error('Name can not be more than 50 characters long')
      return
    }

    try {
      const dbRes = await fetch('api/contact', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({fullname, email, message})
      })

      const res = await fetch('api/send', {
        headers: {
          'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({fullname, email, message})
      })  

        console.log(await res.json())
        if(dbRes.ok || res.ok){
            toast.success(`Hey ${fullname}, your message was sent successfully.`)
            /* setTimeout(() => {
                signIn()
            }, 1500) */
            return
        } else {
            toast.error(`Hey sorry ${fullname}, we could not send your email.`)
            return
        }

    } catch (error) {
      console.log(error);
    }
  }
    
  return (
    <div className='bg-inherit max-w-screen-2xl pt-20 mx-5 xxl:mx-auto'>
      <h1 className='text-3xl md:text-5xl my-5 text-center'>Let&apos;s Keep In Touch</h1> {/* Title */}
      <div className='w-full mt-10 md:flex md:items-center gap-[50px] md:mt-20'> {/* content container */}
        <div className='w-full h-[250px] md:h-[400px] xxl:h-[450px] relative mb-10'> {/* ImgContainer */}
          <Image
            src="/contact.png"
            alt="Beautiful blonde call centre operator"
            fill={true}
            className='image' /* animation goes here */
          />
        </div>
        <form className='mb-5' onSubmit={handleSubmit}> {/* form */}
          <input type="text" value={fullname} onChange={e => setFullname(e.target.value)} placeholder="Name" className='w-full mb-2 p-5 bg-transparent border-[1px] text-xl border-solid border-[#224C5C]' /> {/* input */}
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className='w-full mb-2 p-5 bg-transparent border-[1px] text-xl border-solid border-[#224C5C] text-[#9BCBD3]' /> {/* input */}
          <textarea value={message} onChange={e => setMessage(e.target.value)} className='w-full p-5 bg-transparent border-[1px] text-xl border-solid border-[#224C5C] text-[#9BCBD3]' placeholder="Message" cols="30" rows="5"></textarea> {/* textarea */}
          <button className='bg-[#B05842] p-5 rounded-md mt-2' type='submit'>Send</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
