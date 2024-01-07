import Image from 'next/image'
import Header from './components/Header'
import Hero from './components/Hero'
import Info from './components/Info'
import Quote from './components/Quote'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Info />
      <Quote />
      <div className='bg-blue'>
        Call to action! It&apos;s time!
        Sign up to our product by clicking that button right over there!
      </div>
      <div className='text-center'>Copyright © SkyeGee 2024</div>
    </main>
  )
}
