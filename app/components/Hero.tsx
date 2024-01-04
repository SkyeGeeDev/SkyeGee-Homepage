import React from 'react'

const Hero = () => {
  return (
    <div className='flex justify-center bg-dblue h-[50vh] place-items-center'>
        <div className='grid grid-cols-12'>
            <div className='col-span-4 col-start-3 pr-4'>
                <div className='text-xl font-extrabold'>Welcome to SkyeGee.eth</div>
                <div className='text-sm'>
                    Step into the dynamic universe of SkyeGee, a multifaceted digital explorer deeply immersed in the realms of gaming and web development.
                    This virtual space serves as a portal to the my journey through discovering Web3 and Content Creation, navigating the intersection of creativity, technology, and innovation.
                </div>
            </div>
            <div className='grid col-span-4 bg-gray place-items-center'>
                this is a placeholder for an image
            </div>
        </div>
    </div>
  )
}

export default Hero