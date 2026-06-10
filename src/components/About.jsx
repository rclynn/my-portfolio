import { GraduationCap, Award, Briefcase, MapPin, Calendar, ExternalLink, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { bio, skillCategories, experience, education, certifications } from '../data/portfolioData'
import useReveal from '../hooks/useReveal'

export default function About() {
  const sectionRef = useReveal()
  const skillsRef = useReveal({ rootMargin: '0px 0px -40px 0px' })
  const expRef = useReveal({ rootMargin: '0px 0px -40px 0px' })

  return (
    <section id="about" className="section-padding relative">
      <div className="container-max">
        {/* Section header */}
        <div ref={sectionRef} className="reveal text-center mb-16">
          <span className="section-label">
            <Briefcase size={13} />
            About Me
          </span>
          <h2 className="section-title">Turning Ideas Into Reality</h2>
          <p className="section-subtitle mx-auto">
            A passionate engineer who bridges the gap between code and design.
          </p>
        </div>

        {/* Bio + Education */}
        <div ref={useReveal()} className="reveal grid md:grid-cols-3 gap-8 mb-20">
          {/* Bio */}
          <div className="md:col-span-2">
            <div className="glass-card p-8">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">My Journey</h3>
              {bio.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Education & Certs */}
          <div className="space-y-4">
            {/* Education card */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center">
                  <GraduationCap size={18} className="text-accent-400" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Education</h3>
              </div>
              <p className="text-sm font-medium text-slate-900 dark:text-white mb-1">{education.degree}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">{education.school}</p>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-accent-500/10 text-accent-400 border border-accent-500/20">
                <Award size={11} />
                {education.honors}
              </span>
            </div>

            {/* Certification card */}
            {certifications.slice(0, 1).map((cert, i) => {
              const CardContent = (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                        <Award size={18} className="text-blue-400" />
                      </div>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Certification</h3>
                    </div>
                    {cert.link && <ExternalLink size={14} className="text-slate-600 dark:text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white mb-1">{cert.title}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{cert.issuer}</p>
                </>
              )

              return cert.link ? (
                <a
                  key={i}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block glass-card p-6 group hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
                >
                  {CardContent}
                </a>
              ) : (
                <div key={i} className="glass-card p-6">
                  {CardContent}
                </div>
              )
            })}

            {/* See More Link */}
            <Link 
              to="/certifications"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent-500 hover:text-accent-400 transition-colors mt-2"
            >
              See all certifications
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Experience Timeline */}
        <div ref={expRef} className="reveal mb-20">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 text-center">Experience</h3>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/40 via-accent-500/20 to-transparent" />

            <div className="space-y-8">
              {experience.map((exp, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-6 md:mt-8 w-3 h-3 flex items-center justify-center">
                    <div className="absolute w-full h-full rounded-full border-2 border-accent-500 bg-slate-100 dark:bg-slate-950 z-10" />
                  </div>

                  {/* Content */}
                  <div className={`md:w-1/2 pl-12 md:pl-0 ${
                    i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}>
                    <div className="glass-card-hover p-6">
                      <div className={`flex items-center gap-2 mb-2 text-xs text-slate-500 ${
                        i % 2 === 0 ? 'md:justify-end' : ''
                      }`}>
                        <Calendar size={12} />
                        {exp.period}
                      </div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">{exp.title}</h4>
                      <p className="text-sm font-medium text-accent-400 mb-3">{exp.company}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{exp.description}</p>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full text-[11px] font-semibold bg-green-500/10 text-green-400 border border-green-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          Current Role
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div ref={skillsRef} className="reveal">
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Tech Stack & Skills</h3>
            <p className="text-sm text-slate-500">Technologies I work with on a daily basis</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 stagger">
            {skillCategories.map((category) => {
              const Icon = category.icon
              return (
                <div key={category.title} className="glass-card-hover p-6 group">
                  {/* Category header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center
                                      shadow-lg opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500`}>
                        <Icon size={20} className="text-slate-900 dark:text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">{category.title}</h4>
                        <p className="text-[11px] text-slate-500">{category.skills.length} skills</p>
                      </div>
                    </div>
                    {/* Average proficiency ring */}
                    <div className="relative w-10 h-10">
                      <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="15" fill="none" stroke="currentColor" strokeWidth="2.5"
                                className="text-slate-800" />
                        <circle cx="18" cy="18" r="15" fill="none" strokeWidth="2.5"
                                strokeDasharray={`${Math.round(category.skills.reduce((a, s) => a + s.level, 0) / category.skills.length)} 100`}
                                strokeLinecap="round"
                                className={`text-${category.colorLight}-400 transition-all duration-1000`}
                                style={{ stroke: `url(#grad-${category.title.replace(/\s/g, '')})` }} />
                        <defs>
                          <linearGradient id={`grad-${category.title.replace(/\s/g, '')}`}>
                            <stop offset="0%" className={`[stop-color:theme(colors.${category.colorLight}.400)]`}
                                  style={{ stopColor: category.colorLight === 'sky' ? '#38bdf8' : category.colorLight === 'accent' ? '#a78bfa' : category.colorLight === 'emerald' ? '#34d399' : '#fbbf24' }} />
                            <stop offset="100%" className={`[stop-color:theme(colors.${category.colorLight}.600)]`}
                                  style={{ stopColor: category.colorLight === 'sky' ? '#0284c7' : category.colorLight === 'accent' ? '#7c3aed' : category.colorLight === 'emerald' ? '#059669' : '#d97706' }} />
                          </linearGradient>
                        </defs>
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-slate-900 dark:text-white">
                        {Math.round(category.skills.reduce((a, s) => a + s.level, 0) / category.skills.length)}%
                      </span>
                    </div>
                  </div>

                  {/* Skills with progress bars */}
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                          <span className="text-[10px] font-semibold text-slate-500">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 overflow-hidden">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
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
