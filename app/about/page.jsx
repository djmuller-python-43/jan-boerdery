import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/app/(shared)/Button';


export const metadata = {
  title: 'Duane Muller | About',
  description: 'About page for Duane Muller Web Design',
}

const About = () => {
  return (
    <div className='pt-5 px-5 md:pr-14 md:ml-10 lg:pr-6 lg:mt-60 lg:ml-0'>
      <div className={ styles.imgContainer }>
        <Image src='' alt='header image' fill={ true } className={ styles.img }/>
        <div className={ styles.imgText }>
          <h1 className='text-3xl font-bold pb-2'>Digital Storyteller</h1>
          <h2 className={ styles.imgDesc }>Handcrafted digital experiences</h2>
        </div>
      </div>
      <div className='md:flex md:gap-[60px]'>
        <div className={ styles.item }>
          <h1 className='text-xl'>Who am I?</h1>
          <p className={ styles.desc }>I am a web developer with extensive knowledge and experience in building web applications. I have a knack for problem solving, an eye for detail, and an aptitude for creative thinking. I specialize in Full-Stack development, and have experience with HTML, CSS, JavaScript, NextJS, Express, MongoDB, NodeJS and other web development technologies.
          <br />
          <br />
          I am comfortable undertaking complex tasks such as creating interactive web designs, integrating web technologies, and making interactive systems. I am also well-versed in database manipulation and optimization, as well as developing web tools that ensure the ease and safety of data entry and retrieval. Whether it is creating a simple landing page, or designing an intricate and secure web platform, I can produce quality results.
          <br />
          <br />
          I understand the needs and goals of my clients. I am always open to innovative ideas, and strive to deliver my best work every time. I am confident in my abilities when it comes to web development and can guarantee that I can deliver high-quality results.</p>
        </div>
        <div className={ styles.item }>
          <h1 className='text-xl'>What I do?</h1>
          <p className={ styles.desc }>As a web developer I am responsible for the design, layout, function, and maintenance of websites. I can create websites from scratch, using programs like HTML, JavaScript, and other specialized coding languages. I am knowledgeable of web design standards, principles, and usability guidelines. 
          <br />
          <br />
          I also understand the various stages of a website&apos;s development process, including designing, coding, testing, and maintenance. I create a user experience that visitors to a site can enjoy, and I ensure that websites are optimized for search engine visibility. 
          <br />
          <br />
          Additionally, I use testing methods to identify problems with a website and then solve them. As technology advances, I must also be adept at staying up to date with the latest industry trends and tools.</p>
          <Button url='/contact' text='Contact'/>
        </div>
      </div>
    </div>
  )
}

export default About