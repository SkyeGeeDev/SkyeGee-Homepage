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
    <main>
      <Toaster />
      <div className='min-h-screen flex items-end'>
              <Image
                  src={avatarTalk[currentIndex]}
                  alt=''
                  className='w-[50vh] h-[50vh] hidden md:block'
              />
      </div>
    </main>
  )
}