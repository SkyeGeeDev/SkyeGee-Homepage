import React from 'react'
import Image from 'next/image'
import Avarik from '../../public/avarik.jpg'
import Azuki from '../../public/azuki.png'
import PXN from '../../public/Ghost 7486.jpg'

const Info = () => {
  return (
    <div className='grid grid-cols-12 min-h-[50vh] place-items-center bg-white'>
        <div className='col-span-full flex text-center text-lg text-dblue font-extrabold'>
          Favorite Projects
        </div>
        <div className='flex col-span-8 col-start-3 justify-center text-dblue space-x-4'>
          <Image
            className='transition duration-300 rounded-lg hover:opacity-50'
            src={Avarik}
            alt=''
            width={400}
          />
          <Image
            className='rounded-lg'
            src={Azuki}
            alt=''
            width={400}
          />
          <Image
            className='rounded-lg'
            src={PXN}
            alt=''
            width={400}
          />
        </div>
      </div>
  )
}

export default Info