import React from 'react'

const Header = () => {
  return (
    <div className='grid grid-cols-12 justify-between bg-dblue p-4'>
        <a href='/' className='col-span-2 col-start-3 font-garamond text-lg'>SkyΞ</a>
        <div className='flex flex-row col-span-5 col-end-11 justify-end place-items-center space-x-10'>
            <a href='/projects'>Projects</a>
            <div>NFT</div>
            <div>Contact Me</div>
        </div>
    </div>
  )
}

export default Header