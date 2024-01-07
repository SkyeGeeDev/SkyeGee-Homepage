import React from 'react'

const Quote = () => {
  return (
    <div className='grid grid-cols-12 bg-swhite text-dblue text-center justify-center'>
        <div className='col-span-full text-lg font-extrabold'>
            Follow me on Social Media!
        </div>
        <div className='col-start-3 col-span-8'>
            <div>
                Twitter
            </div>
            <div>
                YouTube
            </div>
            <div>
                Twitch
            </div>
            <div>
                TikTok
            </div>
        </div>
    </div>
  )
}

export default Quote