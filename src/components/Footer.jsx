import { ArrowUp, Heart, Github, Linkedin, Facebook, Instagram, Music2, Youtube, Mail } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-slate-200 dark:border-white/[0.06]">
      {/* Subtle gradient top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/20 to-transparent" />

      <div className="container-max px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left — Logo + Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Logo" 
                  className="w-full h-full object-contain invert dark:invert-0" 
                />
              </div>
              <span className="font-semibold text-slate-900 dark:text-white text-sm">{personalInfo.name}</span>
            </div>
            <p className="text-xs text-slate-500 flex items-center gap-1">
              © {currentYear} - Built with
              <Heart size={11} className="text-accent-400 fill-accent-400" />
              and React
            </p>
          </div>

          {/* Center - Social links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Mail, label: 'Email', href: `mailto:${personalInfo.email}` },
              { icon: Github, label: 'GitHub', href: personalInfo.github },
              { icon: Linkedin, label: 'LinkedIn', href: personalInfo.linkedin },
              { icon: Facebook, label: 'Facebook', href: personalInfo.facebook },
              { icon: Instagram, label: 'Instagram', href: personalInfo.instagram },
              { icon: Music2, label: 'TikTok', href: personalInfo.tiktok },
              { icon: Youtube, label: 'YouTube', href: personalInfo.youtube },
            ].map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-white/[0.06] flex items-center justify-center
                             text-slate-500 hover:text-accent-400 hover:bg-accent-500/10 hover:border-accent-500/20
                             transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon size={15} />
                </a>
              )
            })}
          </div>

          {/* Right — Back to top */}
          <button
            id="back-to-top"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium
                       text-slate-500 hover:text-accent-400 bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-white/[0.06]
                       hover:bg-accent-500/10 hover:border-accent-500/20
                       transition-all duration-300"
          >
            Back to Top
            <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  )
}
