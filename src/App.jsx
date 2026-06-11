import { useEffect } from 'react'
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import Cursor from './components/Cursor'
import ParticleBackground from './components/ParticleBackground'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Home from './pages/Home'
import NichosPage from './pages/NichosPage'
import RamosPage from './pages/RamosPage'
import DemoRouter from './demos/DemoRouter'
import './App.css'

// Rola para o topo a cada troca de rota (exceto quando há âncora #hash).
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

// Layout do portfólio: cursor custom + partículas (não aparecem nas demos).
function PortfolioLayout() {
  return (
    <>
      <Cursor />
      <ParticleBackground />
      <Outlet />
      <FloatingWhatsApp />
    </>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<PortfolioLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<NichosPage />} />
          <Route path="/projetos/:nicho" element={<RamosPage />} />
        </Route>
        <Route path="/demo/:ramo" element={<DemoRouter />} />
      </Routes>
    </>
  )
}

export default App
