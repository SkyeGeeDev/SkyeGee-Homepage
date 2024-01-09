import React from 'react'

const CTA = () => {
  return (
    <div className='grid bg-white grid-cols-12 py-8'>
        <div className='col-start-3 col-span-8 bg-blue justify-center py-8 rounded-lg'>
            <div className='flex flex-row justify-around'>
                <div className='flex flex-col'>
                    <div className='text-sm font-bold'>
                        Looking for a Developer?
                    </div> 
                    <div className='text-sm font-thin'>
                        Click the button to see what sort of work I provide.
                    </div>
                </div>
                <div className='border-white border-2 p-4 rounded-lg cursor-pointer hover:bg-hblue transition duration-300'>
                    Hire Me!
                </div>
            </div>
        </div>
    </div>
  )
}

export default CTA