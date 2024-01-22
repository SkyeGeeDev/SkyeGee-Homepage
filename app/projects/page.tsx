'use client'
import Header from '../components/Header'
import RPS from '../components/RPS'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Home() {
  const [activeProject, setActiveProject] = useState('');

  return (
    <main className="">
      <Header />
      <div className='min-h-screen grid grid-cols-12 mx-[70px] pt-8'>
        <div className='col-span-4 col-start-5 h-[500px] p-8 border-2 rounded-lg text-center bg-gray'>
          <div className='text-lg text-white'>Rock, Paper, Scissors!</div>
          <div className='text-md'>Play rock, paper, scissors against a computer! A Javascript game I created using React&apos;s useState hooks and onClick event handling in order to send the choice to the script as well as update the score throughout.  </div>
          <div  className='bg-gray border-2 p-4 mt-28 rounded-md cursor-pointer transition duration-300 hover:bg-blue'>Play Game!</div>
        </div>
      </div>
      <Footer />
    </main>
  )
}