import { useState } from 'react'
import { ExternalLink, Github, Layers } from 'lucide-react'
import { projects, projectCategories } from '../data/portfolioData'
import useReveal from '../hooks/useReveal'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const sectionRef = useReveal()
  const gridRef = useReveal({ rootMargin: '0px 0px -40px 0px' })

  const handleProjectLinkRequest = (e, projectTitle, linkType) => {
    e.preventDefault()
    const el = document.querySelector('#contact')
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
      
      window.dispatchEvent(new CustomEvent('requestProjectLink', { 
        detail: { projectTitle, linkType }
      }))
    }
  }

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-600/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="container-max">
        {/* Header */}
        <div ref={sectionRef} className="reveal text-center mb-12">
          <span className="section-label">
            <Layers size={13} />
            Portfolio
          </span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            A curated selection of projects showcasing my skills in engineering and design.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-accent-500/20 text-accent-400 border border-accent-500/30 shadow-lg shadow-accent-500/10'
                  : 'text-slate-600 dark:text-slate-400 border border-transparent hover:text-slate-900 dark:text-white hover:bg-white/[0.04]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div ref={gridRef} className="reveal">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {filtered.map((project) => {
              const Icon = project.icon
              return (
                <div
                  key={project.id}
                  className="group glass-card card-glow flex flex-col overflow-hidden
                             hover:border-accent-500/20 hover:shadow-2xl hover:shadow-accent-500/5
                             transition-all duration-500"
                >
                  {/* Project image / icon area */}
                  <div className="relative h-48 bg-gradient-to-br from-slate-800/80 to-slate-900/80 flex items-center justify-center overflow-hidden">
                    {/* Decorative grid */}
                    <div className="absolute inset-0 dot-grid opacity-30" />

                    {/* Accent gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />

                    {/* Icon */}
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center
                                    group-hover:bg-accent-500/20 group-hover:scale-110 group-hover:border-accent-400/30
                                    transition-all duration-500">
                      <Icon size={28} className="text-accent-400" />
                    </div>

                    {/* Hover shimmer */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out
                                    bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative z-20 flex flex-col flex-1 p-6">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-accent-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <h4 className="text-sm font-semibold text-accent-500 mb-3 uppercase tracking-wider">
                        {project.subtitle}
                      </h4>
                    )}
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium
                                     bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/[0.04]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="relative z-10 flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-white/[0.06]">
                      {project.github && project.github !== '#' && (
                        <button
                          onClick={(e) => handleProjectLinkRequest(e, project.title, 'GitHub repository')}
                          className="inline-flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-accent-400 transition-colors duration-300"
                          aria-label={`Request ${project.title} source code`}
                        >
                          <Github size={15} />
                          Code
                        </button>
                      )}
                      {project.demo && project.demo !== '#' && (
                        <button
                          onClick={(e) => handleProjectLinkRequest(e, project.title, project.demo.includes('figma.com') ? 'Figma file' : 'live demo')}
                          className="inline-flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-accent-400 transition-colors duration-300"
                          aria-label={`Request ${project.title} live demo`}
                        >
                          <ExternalLink size={15} />
                          {project.demo.includes('figma.com') ? 'View Figma' : 'Live Demo'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
