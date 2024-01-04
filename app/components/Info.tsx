import React from 'react'
import Image from 'next/image'
import Avarik from '../../public/avarik.jpg'
import Azuki from '../../public/azuki.png'
import PXN from '../../public/Ghost 7486.jpg'

const Info = () => {
  return (
    <div className='grid min-h-[50vh] place-items-center bg-white'>
        <div className='text-center text-lg text-dblue font-extrabold'>
          Favorite Projects
        </div>
        <div className='flex justify-center space-x-4 text-dblue'>
          <div className='w-[400px] text-center'>
            <Image
                src={Avarik}
                alt=''
            />
            <div className='text-sm'>Avarik Saga</div>
          </div>
          <div className='w-[400px] text-center'>
            <Image
                src={Azuki}
                alt=''
            />
            <div className='text-sm'>Azuki</div>
          </div>
          <div className='w-[400px] text-center'>
            <Image
                src={PXN}
                alt=''
            />
            <div className='text-sm'>PxN</div>
          </div>
        </div>
      </div>
  )
}

export default Info