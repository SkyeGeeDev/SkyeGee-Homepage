import React from 'react'

const Header = () => {
  return (
    <div className='grid grid-cols-12 justify-between bg-dblue p-4'>
        <div className='col-span-2 col-start-3'>Header Logo</div>
        <div className='flex flex-row col-span-5 col-end-11 justify-end space-x-10'>
            <div>Header link one</div>
            <div>Header link two</div>
            <div>Header link three</div>
        </div>
    </div>
  )
}

export default Header