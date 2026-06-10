import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Award, ExternalLink, ArrowRight, X } from 'lucide-react'
import { certifications } from '../data/portfolioData'
import useReveal from '../hooks/useReveal'

export default function Certifications() {
  const sectionRef = useReveal()
  const [selectedCertIndex, setSelectedCertIndex] = useState(null)

  return (
    <section id="certifications" className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 animate-fade-in-up">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-accent-500/10 text-accent-400 mb-6 border border-accent-500/20 backdrop-blur-sm">
            <Award size={28} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            Licenses & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Professional validations of my technical expertise and commitment to continuous learning.
          </p>
        </div>

        {/* Certifications Grid (Featured Only) */}
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 justify-center">
          {certifications.slice(0, 2).map((cert, index) => (
            <div key={cert.title} className="w-full">
              <CertificationCard cert={cert} index={index} onView={setSelectedCertIndex} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            to="/certifications"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-sm hover:scale-105 transition-all duration-300 shadow-xl shadow-slate-900/20 dark:shadow-white/20"
          >
            See all certifications
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Global Lightbox Modal */}
      {selectedCertIndex !== null && (() => {
        // We only feature 2 certifications here, but we pass the actual index from map.
        // It's index 0 or 1.
        const cert = certifications[selectedCertIndex]
        return (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-slate-900/95 backdrop-blur-md" onClick={() => setSelectedCertIndex(null)}>
            <button 
              className="absolute top-4 right-4 sm:top-8 sm:right-8 p-2 rounded-full bg-white/10 text-white hover:bg-accent-500 transition-colors shadow-xl z-20"
              onClick={(e) => { e.stopPropagation(); setSelectedCertIndex(null) }}
            >
              <X size={18} />
            </button>

            <img 
              src={cert.link} 
              alt={cert.title} 
              className="max-w-full max-h-full rounded-xl shadow-2xl object-contain bg-white animate-fade-in-up" 
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )
      })()}
    </section>
  )
}

function CertificationCard({ cert, index, onView }) {
  const cardRef = useReveal(index * 0.1)
  const isImage = cert.link?.endsWith('.png')

  const handleVerify = (e) => {
    if (isImage) {
      e.preventDefault()
      onView(index)
    }
  }

  return (
    <div 
      ref={cardRef}
      className="group relative p-1 rounded-2xl bg-gradient-to-br from-slate-200 to-slate-100 dark:from-white/10 dark:to-white/5 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/10"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative h-full p-5 sm:p-6 rounded-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-white/[0.02] flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
        
        {/* Left: Icon */}
        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-400 to-violet-500 flex items-center justify-center text-white shadow-lg shadow-accent-500/20">
          <Award size={28} />
        </div>
        
        {/* Middle: Text Content */}
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-accent-500 dark:group-hover:text-accent-400 transition-colors leading-tight">
            {cert.title}
          </h3>
          <p className="text-xs font-semibold text-accent-600 dark:text-accent-400 uppercase tracking-wider mb-2">
            {cert.issuer}
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-snug mb-0">
            {cert.description}
          </p>
        </div>

        {/* Right: Action Button */}
        {cert.link && (
          <div className="flex-shrink-0 mt-4 sm:mt-0 sm:ml-4 w-full sm:w-auto">
            <a 
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleVerify}
              className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-accent-500 hover:text-white dark:hover:bg-accent-500 transition-all duration-300 border border-slate-200 dark:border-white/10 hover:border-transparent font-medium text-sm whitespace-nowrap"
            >
              Verify Credential
              <ExternalLink size={16} />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
