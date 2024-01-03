import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className='flex justify-between bg-dblue'>
        <div>Header Logo</div>
        <div>Header link one</div>
        <div>Header link two</div>
        <div>Header link three</div>
      </div>
      <div>
        <div className='flex justify-center bg-dblue'>
          <div className='flex flex-col'>
            <div className='text-xl'>This website is awesome</div>
            <div className='text-sm'>This website has some subtext that goes here under the main title. It's a smaller font and the color is lower contrast.</div>
          </div>
          <div>
            This is a placeholder for an image
          </div>
        </div>
      </div>
      <div>
        <div className='text-center'>
          Some random information
        </div>
        <div className='flex justify-center space-x-4'>
          <div className='w-20 text-center'>
            <div className='w-20 h-20 bg-white border-blue border-2 rounded-md'></div>
            <div className='text-sm'>this is some subtext under an illustration or image</div>
          </div>
          <div className='w-20 text-center'>
            <div className='w-20 h-20 bg-white border-blue border-2 rounded-md'></div>
            <div className='text-sm'>this is some subtext under an illustration or image</div>
          </div>
          <div className='w-20 text-center'>
            <div className='w-20 h-20 bg-white border-blue border-2 rounded-md'></div>
            <div className='text-sm'>this is some subtext under an illustration or image</div>
          </div>
          <div className='w-20 text-center'>
            <div className='w-20 h-20 bg-white border-blue border-2 rounded-md'></div>
            <div className='text-sm'>this is some subtext under an illustration or image</div>
          </div>
        </div>
      </div>
      <div className='flex text-center justify-center'>
        This is an inspiring quote, or a testimonial from a customer. Maybe it's just filling up space, or maybe people will actually read it. Who knows? All I know is that it looks nice.
      </div>
      <div className='bg-blue'>
        Call to action! It's time!
        Sign up to our product by clicking that button right over there!
      </div>
      <div className='text-center'>Copyright © SkyeGee 2024</div>
    </main>
  )
}
