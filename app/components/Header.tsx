import React from 'react'

const Header = () => {
  return (
    <div className='grid grid-cols-12 justify-between bg-dblue p-4 font-permanent-marker'>
        <a href='/' className='col-span-2 col-start-3 text-lg'>SkyeGee</a>
        <div className='flex flex-row col-span-5 col-end-11 justify-end place-items-center space-x-10'>
            <div className=''>Web3</div>
            <a href='/projects' className=''>Projects</a>
            <div className=''>Contact Me</div>
        </div>
    </div>
  )
}

export default Header