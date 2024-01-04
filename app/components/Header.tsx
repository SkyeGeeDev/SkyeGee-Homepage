import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between bg-dblue p-4'>
        <div>Header Logo</div>
        <div className='flex flex-row space-x-4'>
            <div>Header link one</div>
            <div>Header link two</div>
            <div>Header link three</div>
        </div>
    </div>
  )
}

export default Header