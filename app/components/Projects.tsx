import React from 'react'
import Script from 'next/script'
import { Alert } from '@chakra-ui/react'

const Projects = () => {
  return (
    <div className='grid grid-cols-12 bg-swhite text-dblue text-center justify-center py-8'>
        <div className='col-span-full text-lg font-extrabold'>
            My Projects
        </div>
        <div className='flex flex-row col-start-3 col-span-8 justify-center space-x-8'>
            <Script>
              function showMessage (
                alert('Hello');
              )

              showMessage();
            </Script>
        </div>
    </div>
  )
}

export default Projects