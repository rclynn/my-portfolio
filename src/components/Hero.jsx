import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-accent-600/[0.07] blur-[90px] md:blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-purple-600/[0.05] blur-[80px] md:blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-violet-500/[0.04] blur-[60px] md:blur-[80px]" />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Orbiting ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[700px] md:h-[700px]">
          <div className="absolute inset-0 rounded-full border border-accent-500/[0.06] animate-orbit" />
          <div className="absolute inset-8 rounded-full border border-violet-500/[0.04] animate-orbit-reverse" />
          <div className="absolute inset-16 rounded-full border border-purple-500/[0.03]" />
        </div>

        {/* Floating dots on orbit */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[700px] md:h-[700px] animate-orbit">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent-400/40" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-violet-400/30" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-purple-400/30" />
        </div>

        {/* Scattered geometric elements */}
        <div className="absolute top-20 right-[15%] w-16 h-16 border border-accent-500/10 rounded-lg rotate-45 animate-float" />
        <div className="absolute bottom-32 left-[10%] w-12 h-12 border border-violet-500/10 rounded-full animate-float-delayed" />
        <div className="absolute top-[40%] right-[8%] w-8 h-8 bg-accent-500/5 rounded-md rotate-12 animate-float-slow" />
        <div className="absolute bottom-[20%] right-[20%] w-6 h-6 border border-purple-500/10 rounded-sm rotate-45 animate-float" />
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 -z-10 dot-grid opacity-40" />

      {/* Content */}
      <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="animate-fade-in-down mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase
                           bg-accent-500/10 text-accent-400 border border-accent-500/20 backdrop-blur-sm">
            <Sparkles size={13} className="animate-pulse" />
            Available for Opportunities
          </span>
        </div>

        {/* Heading */}
        <h1 className="animate-fade-in-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
          <span className="text-slate-900 dark:text-white">Hi, I'm </span>
          <span className="gradient-text">{personalInfo.firstName}</span>
          <br />
          <span className="text-slate-700 dark:text-slate-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 block">
            {personalInfo.role}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10"
           style={{ animationDelay: '0.2s' }}>
          {personalInfo.subTagline}
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4"
             style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => scrollTo('#projects')}
            className="btn-primary group"
          >
            View My Work
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="btn-outline"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in absolute bottom-8 left-1/2 -translate-x-1/2"
             style={{ animationDelay: '1s' }}>
          <button
            onClick={() => scrollTo('#about')}
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-accent-600 dark:hover:text-accent-400 transition-colors duration-300"
            aria-label="Scroll to About section"
          >
            <span className="text-[10px] font-medium tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  )
}
