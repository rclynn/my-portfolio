import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Send, ChevronRight, Sun, Moon } from 'lucide-react'
import { personalInfo, navLinks } from '../data/portfolioData'

export default function Navbar({ isDarkMode, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleResumeRequest = (e) => {
    e.preventDefault()
    setIsOpen(false)
    
    if (location.pathname !== '/') {
      navigate('/#contact')
      // Delay prefill to give home page time to mount
      setTimeout(() => window.dispatchEvent(new CustomEvent('requestResume')), 500)
    } else {
      const el = document.querySelector('#contact')
      if (el) {
        const offset = 80
        const top = el.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: 'smooth' })
        
        // Dispatch custom event to prefill contact form
        window.dispatchEvent(new CustomEvent('requestResume'))
      }
    }
  }

  // Track active section via IntersectionObserver and Route
  useEffect(() => {
    if (location.pathname !== '/') {
      // If we are on a different page, highlight that page's nav item
      const pageName = location.pathname.split('/')[1]
      setActiveSection(pageName)
      return
    }

    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.1, rootMargin: '-80px 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [location.pathname])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      const navbar = document.getElementById('navbar')
      if (isOpen && navbar && !navbar.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    
    if (location.pathname !== '/') {
      navigate(`/${href}`)
    } else {
      const target = document.querySelector(href)
      if (target) {
        const offset = 80
        const top = target.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
  }

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-lg shadow-black/10 border-b border-slate-200 dark:border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-max flex items-center justify-between h-16 md:h-18 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-3"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="w-full h-full object-contain invert dark:invert-0" 
            />
          </div>
          <span className="hidden sm:block font-semibold text-slate-900 dark:text-white group-hover:text-accent-400 transition-colors duration-300">
            {personalInfo.firstName}
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-accent-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-accent-500 rounded-full" />
                )}
              </a>
            )
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={handleResumeRequest}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold
                       bg-accent-500/10 text-accent-400 border border-accent-500/30
                       hover:bg-accent-500/20 hover:border-accent-400 hover:shadow-lg hover:shadow-accent-500/10
                       transition-all duration-300"
          >
            <Send size={15} />
            Request Resume
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="relative w-10 h-10 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-10 h-10 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-all duration-300"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out absolute top-full left-0 right-0 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/[0.06] shadow-2xl ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 border-transparent shadow-none'
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-accent-400 bg-accent-500/10'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
                <ChevronRight size={14} className="opacity-40" />
              </a>
            )
          })}

          <div className="pt-3 border-t border-slate-200 dark:border-white/[0.06]">
            <button
              onClick={handleResumeRequest}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold
                         bg-accent-500/10 text-accent-400 border border-accent-500/30
                         hover:bg-accent-500/20 transition-all duration-300"
            >
              <Send size={15} />
              Request Resume
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
