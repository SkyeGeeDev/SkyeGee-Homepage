import Header from '../components/Header'
import RPS from '../components/RPS'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className='h-screen grid place-content-center item-center'>
          <RPS />
      </div>
    </main>
  )
}