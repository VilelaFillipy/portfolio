import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Cursor from './components/Cursor'
import ParticleBackground from './components/ParticleBackground'
import './App.css'

function App() {
  return (
    <>
      <Cursor />
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

export default App
