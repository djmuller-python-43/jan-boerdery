import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/app/(shared)/Button";


export const metadata = {
  title: 'Duane Muller | Contact',
  description: 'Contact page for Duane Muller Web Design',
}

const Contact = () => {
  return (
    <div className='bg-inherit pt-20 mx-5'>
      <h1 className='text-3xl md:text-5xl my-5 text-center'>Let&apos;s Keep In Touch</h1> {/* Title */}
      <div className='w-full mt-10 md:flex md:items-center gap-[50px] md:mt-20'> {/* content container */}
        <div className='w-full h-[250px] md:h-[300px] lg:h-[400px] relative mb-10'> {/* ImgContainer */}
          <Image
            src="/contact.png"
            alt="Beautiful blonde call centre operator"
            fill={true}
            className='image' /* animation goes here */
          />
        </div>
        <form className='mb-5'> {/* form */}
          <input type="text" placeholder="Name" className='w-full mb-2 p-5 bg-transparent border-[1px] text-xl border-solid border-[#224C5C] text-[#9BCBD3]' /> {/* input */}
          <input type="text" placeholder="Email" className='w-full mb-2 p-5 bg-transparent border-[1px] text-xl border-solid border-[#224C5C] text-[#9BCBD3]' /> {/* input */}
          <textarea className='w-full p-5 bg-transparent border-[1px] text-xl border-solid border-[#224C5C] text-[#9BCBD3]' placeholder="Message" cols="30" rows="5"></textarea> {/* textarea */}
          <Button url='#' text='Send'/>
        </form>
      </div>
    </div>
  );
};

export default Contact;
