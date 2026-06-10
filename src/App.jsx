import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AllCertifications from './pages/AllCertifications'

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        return savedTheme === 'dark'
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return true
  })
  const location = useLocation()

  // Handle hash scrolling on cross-page navigation
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const target = document.querySelector(location.hash)
        if (target) {
          const offset = 80
          const top = target.getBoundingClientRect().top + window.scrollY - offset
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Subtle noise texture overlay */}
      <div
        className="fixed inset-0 -z-20 opacity-[0.012] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient glow blobs */}
      <div className="fixed top-0 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-accent-600/[0.04] rounded-full blur-[90px] md:blur-[128px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-purple-600/[0.03] rounded-full blur-[90px] md:blur-[128px] -z-10 pointer-events-none" />

      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <About />
            <Projects />
            <Certifications />
            <Hobbies />
            <Contact />
          </main>
        } />
        <Route path="/certifications" element={<AllCertifications />} />
      </Routes>

      <Footer />
    </div>
  )
}
