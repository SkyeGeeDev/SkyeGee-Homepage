'use client'
import Image from 'next/image'
import About from '../app/components/About'
import { useState, useEffect } from 'react'
import BC from '../public/bothclosed.png'
import BO from '../public/bothopen.png'
import EO from '../public/openeyes.png'
import MO from '../public/openmouth.png'
import { Transition } from '@headlessui/react'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import { Toaster } from 'react-hot-toast'


const avatarStare = [EO, EO, EO, BC, EO, BC, EO]
const avatarTalk = [BO, EO, BO, BO, MO, BO, MO];

export default function Home() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('about');
    const [activated, setActivated] = useState(true);

    const handleAbout = () => {
      setActiveTab('about');
      if (activeTab === 'about' && activated === true){
        setActivated(false);
      } else {
        setActivated(true);
      }
    }

    const handleProject = () => {
      setActiveTab('project');
      if (activeTab === 'project' && activated === true){
        setActivated(false);
      } else {
        setActivated(true);
      }
    }

    const handleContact = () => {
      setActiveTab('contact');
      if (activeTab === 'contact' && activated === true){
        setActivated(false);
      } else {
        setActivated(true);
      }
    }

    useEffect(() => {
        const intervalId = setInterval(() =>{
            if (currentIndex === (avatarStare.length - 1)) {
                setCurrentIndex(0);
            } else {
                setCurrentIndex(currentIndex + 1);
            }
        }, 350)

        return () => {clearInterval(intervalId)}
    }, [currentIndex])

  return (
    <main className=''>
      <Toaster />
      <div className='min-h-screen grid grid-cols-12 md:mx-[70px] mx-[20px]'>
        <div className='col-span-full bg-gray flex flex-col justify-between my-8 rounded-lg'>
            <div className='flex flex-row space-x-8 justify-center py-10 mx-4' >
                {activeTab === 'about' && activated === true
                  ? 
                  <button onClick={handleAbout} className="shadow-xl hover:shadow-blue relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden transition ease-in-out duration-300 border-2 rounded-xl group">
                    <span className='absolute flex items-center justify-center w-full h-full bg-hblue hover:bg-blue'>About</span>
                    <span className='relative invisible'>Favorite Project</span>
                  </button>
                  : 
                  <button onClick={handleAbout} className="shadow-xl hover:shadow-hblue relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden transition ease-in-out duration-300 border-2 rounded-xl group">
                    <span className='absolute flex items-center justify-center w-full h-full bg-blue hover:bg-hblue'>About</span>
                    <span className='relative invisible'>Favorite Project</span>
                  </button>
                }
                {activeTab === 'project' && activated === true
                  ? 
                  <button onClick={handleProject} className="shadow-xl hover:shadow-blue relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden transition ease-in-out duration-300 border-2 rounded-xl group">
                    <span className='absolute flex items-center justify-center w-full h-full bg-hblue hover:bg-blue'>Projects</span>
                    <span className='relative invisible'>Favorite Project</span>
                  </button>
                  : 
                  <button onClick={handleProject} className="shadow-xl hover:shadow-hblue relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden transition ease-in-out duration-300 border-2 rounded-xl group">
                    <span className='absolute flex items-center justify-center w-full h-full bg-blue hover:bg-hblue'>Projects</span>
                    <span className='relative invisible'>Favorite Project</span>
                  </button>
                }
                {activeTab === 'contact' && activated === true
                  ? 
                  <button onClick={handleContact} className="shadow-xl hover:shadow-blue relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden transition ease-in-out duration-300 border-2 rounded-xl group">
                    <span className='absolute flex items-center justify-center w-full h-full bg-hblue hover:bg-blue'>Contact Me</span>
                    <span className='relative invisible'>Favorite Project</span>
                  </button>
                  : 
                  <button onClick={handleContact} className="shadow-xl hover:shadow-hblue relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden transition ease-in-out duration-300 border-2 rounded-xl group">
                    <span className='absolute flex items-center justify-center w-full h-full bg-blue hover:bg-hblue'>Contact Me</span>
                    <span className='relative invisible'>Favorite Project</span>
                  </button>
                }
                
            </div>
            <div className='flex flex-row text-center justify-evenly place-items-end'>
                {activated === false && 
                    <Image 
                        src={avatarStare[currentIndex]}
                        alt=''
                        className='w-[50vh] h-[50vh] hidden md:block'
                    />
                }
                {activated === true &&
                    <Image 
                        src={avatarTalk[currentIndex]}
                        alt=''
                        className='w-[50vh] h-[50vh] hidden md:block'
                    />
                }
                <Transition 
                  appear={true}
                  show={activated}
                  enter='transition-all ease-in-out duration-500 delay-[200ms]'
                  enterFrom='opacity-0 translate-y-6'
                  enterTo='opacity-100 translate-y-0'
                  leave='transition-all ease-in-out duration-300'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                    {activated === false && <div className='hidden'></div>}
                    {activeTab === 'about' && <About />}
                    {activeTab === 'project' && <Projects />}
                    {activeTab === 'contact' && <ContactMe />}
                </Transition>
            </div>
        </div>
      </div>
    </main>
  )
}