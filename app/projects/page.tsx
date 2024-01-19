import Header from '../components/Header'
import RPS from '../components/RPS'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <RPS />
      <Footer />
    </main>
  )
}