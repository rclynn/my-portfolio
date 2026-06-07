import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import Footer from './components/Footer'

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

      <main>
        <Hero />
        <About />
        <Projects />
        <Hobbies />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
