import React from 'react'
import { BsTwitter, BsTiktok, BsYoutube, BsTwitch} from 'react-icons/bs'

const About = () => {
  return (
    <div className='bg-dblue p-8 mb-8 rounded-xl border-2 mx-8'>
        <div className='text-lg font-bold pb-4'>About Me</div>
        <div className=''>Hi, I&apos;m SkyeGee, your designated tour guide through everything Web3, web development, and content creation. With a passion for navigating the ever-evolving landscape of the digital world, I am here to demystify the complexities of Web3 technologies, guide you through the intricacies of web development, and empower your creative journey in content creation. Whether you&apos;re a seasoned professional or just starting, join me on this exciting exploration where we unravel the possibilities and potential of the online realm together. Let&apos;s embark on a journey where innovation meets creativity, and where the future of the web is shaped with every line of code and every piece of content we create.</div>
        <div className='text-lg font-bold py-8'>Follow me on all Socials!</div>
        <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center'>
            <a href='https://twitter.com/intent/user?screen_name=SkyeGeeTV' target='_blank' rel='noopener noreferrer' className='bg-blue flex p-4 justify-center place-items-center rounded-md hover:bg-hblue'>
              <span className=''><BsTwitter size="25"/></span>
            </a>
            <a className='bg-blue flex p-4 justify-center place-items-center rounded-md hover:bg-hblue'>
              <span className=''><BsTiktok size="25"/></span>
            </a>
            <a className='bg-blue flex p-4 justify-center place-items-center rounded-md hover:bg-hblue'>
              <span className=''><BsYoutube size="25"/></span>
            </a>
            <a className='bg-blue flex p-4 justify-center place-items-center rounded-md hover:bg-hblue'>
              <span className=''><BsTwitch size="25"/></span>
            </a>
        </div>
    </div>
  )
}

export default About