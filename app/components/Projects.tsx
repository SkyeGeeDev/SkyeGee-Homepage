'use client'
import React from 'react'
import { useState } from 'react'
import RPS from '../components/RPS'
import { Transition } from '@headlessui/react'

const Projects = () => {
  const [activeProject, setActiveProject] = useState('');
  const [activated, setActivated] = useState(false);

  const handleProjects = () => {
    setActiveProject('');
    setActivated(false);
  }

  const handleRPS = () => {
    setActiveProject('RPS');
    setActivated(true);
  }

  return (
    <div className='place-content-center flex mb-8'>
        {activeProject === '' && 
        <div>
          <div className='h-[450px] w-[400px] p-8 border-2 rounded-lg text-center bg-dblue'>
            <div className='text-lg font-bold text-white'>Rock, Paper, Scissors!</div>
            <div className='text-md'>Play rock, paper, scissors against a computer! A Javascript game I created using React&apos;s useState hooks and onClick event handling in order to send the choice to the script as well as update the score throughout.  </div>
            <button onClick={handleRPS} className='bg-blue border-2 p-4 mt-10 rounded-md cursor-pointer transition duration-300 hover:bg-hblue'>Play Game!</button>
          </div>
        </div>
        }
        <Transition 
          show={activated}
          enter="transition-all ease-in-out duration-500 delay-[200ms]"
          enterFrom="opacity-0 translate-y-6"
          enterTo="opacity-100 translate-y-0"
          leave="transition-all ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {activeProject === 'RPS' && <RPS back={handleProjects}/>}
        </Transition>
      </div>
  )
}

export default Projects