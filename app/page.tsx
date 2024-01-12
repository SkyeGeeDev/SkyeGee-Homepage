import Header from './components/Header'
import Hero from './components/Hero'
import Info from './components/Info'
import Projects from './components/Projects'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Info />
      <Projects />
      <CTA />
      <Footer />
    </main>
  )
}
