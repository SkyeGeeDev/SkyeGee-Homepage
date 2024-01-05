import React from 'react'
import Image from 'next/image'
import AzukiPXN from '../../public/azukipxn.png'

const Hero = () => {
  return (
    <div className='grid grid-cols-12 bg-dblue min-h-[50vh] place-items-center py-8'>
        <div className='col-span-4 col-start-3 pr-4'>
            <div className='text-xl font-extrabold'>Welcome to SkyeGee.eth</div>
            <div className='text-sm'>
                Step into the dynamic universe of SkyeGee, a multifaceted digital explorer deeply immersed in the realms of gaming and web development.
                This virtual space serves as a portal to the my journey through discovering Web3 and Content Creation, navigating the intersection of creativity, technology, and innovation.
            </div>
        </div>
        <Image
            className='rounded-lg flex col-end-11 col-span-3 '
            src={AzukiPXN}
            alt=''
        />
    </div>
  )
}

export default Hero