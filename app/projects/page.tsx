import Header from '../components/Header'
import Script from 'next/script'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Script src='RPS.js'/>
      <div className='h-screen grid place-content-center item-center'>
        <div className='flex space-x-4'>
            <button onClick={playRound('rock')} className='bg-blue p-4 rounded-lg'>Rock</button>
            <button className='bg-blue p-4 rounded-lg'>Paper</button>
            <button className='bg-blue p-4 rounded-lg'>Scissors</button>
        </div>
      </div>
    </main>
  )
}