import Image from 'next/image'
import Header from './components/Header'
import Hero from './components/Hero'
import Info from './components/Info'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Info />
      <div className='flex text-center justify-center'>
        This is an inspiring quote, or a testimonial from a customer. Maybe it&apos;s just filling up space, or maybe people will actually read it. Who knows? All I know is that it looks nice.
      </div>
      <div className='bg-blue'>
        Call to action! It&apos;s time!
        Sign up to our product by clicking that button right over there!
      </div>
      <div className='text-center'>Copyright © SkyeGee 2024</div>
    </main>
  )
}
