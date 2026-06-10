import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Award, ExternalLink, ArrowLeft, X } from 'lucide-react'
import { certifications, certificationCategories } from '../data/portfolioData'
import useReveal from '../hooks/useReveal'

export default function Certifications() {
  const sectionRef = useReveal()
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedCertIndex, setSelectedCertIndex] = useState(null)

  const filteredCertifications = activeCategory === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeCategory)

  return (
    <section className="pt-32 pb-24 relative min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="container-max">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-accent-500 dark:text-slate-400 dark:hover:text-accent-400 font-medium transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>

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

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {certificationCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/25'
                  : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          {filteredCertifications.map((cert, index) => (
            <CertificationCard key={cert.title} cert={cert} index={index} onView={setSelectedCertIndex} />
          ))}
        </div>
      </div>

      {/* Global Lightbox Modal */}
      {selectedCertIndex !== null && (() => {
        const cert = filteredCertifications[selectedCertIndex]
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
      
      <div className="relative h-full p-4 sm:p-5 rounded-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-white/[0.02] flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
        
        {/* Left: Icon */}
        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-400 to-violet-500 flex items-center justify-center text-white shadow-lg shadow-accent-500/20">
          <Award size={24} />
        </div>
        
        {/* Middle: Text Content */}
        <div className="flex-grow min-w-0">
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-accent-500 dark:group-hover:text-accent-400 transition-colors leading-tight line-clamp-2">
            {cert.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-snug mb-0">
            {cert.description}
          </p>
        </div>

        {/* Right: Action Button */}
        {cert.link && (
          <div className="flex-shrink-0 mt-3 sm:mt-0 sm:ml-4 w-full sm:w-auto">
            <a 
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleVerify}
              className="inline-flex items-center justify-center w-full sm:w-auto gap-1.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-accent-500 hover:text-white dark:hover:bg-accent-500 transition-all duration-300 border border-slate-200 dark:border-white/10 hover:border-transparent font-medium text-xs whitespace-nowrap"
            >
              Verify Credential
              <ExternalLink size={14} />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
