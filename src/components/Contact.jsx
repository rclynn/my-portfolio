import { useState, useEffect } from 'react'
import { Send, Mail, MapPin, Phone, Linkedin, Github, CheckCircle, AlertCircle, MessageSquare, Facebook, Instagram, Music2, Youtube } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'
import useReveal from '../hooks/useReveal'

export default function Contact() {
  const sectionRef = useReveal()
  const formRef = useReveal({ rootMargin: '0px 0px -40px 0px' })

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [sending, setSending] = useState(false)

  useEffect(() => {
    const handleRequestResume = () => {
      setFormData((prev) => ({
        ...prev,
        message: 'Hi Ricalyn,\n\nI would like to request a copy of your resume.\n\nThank you.'
      }))
      // Small delay to allow scroll to complete
      setTimeout(() => {
        document.getElementById('contact-message')?.focus()
      }, 500)
    }

    const handleProjectLinkRequest = (e) => {
      const { projectTitle, linkType } = e.detail
      setFormData((prev) => ({
        ...prev,
        message: `Hi Ricalyn,\n\nI would like to request access to the ${linkType} for your project "${projectTitle}".\n\nThank you.`
      }))
      setTimeout(() => {
        document.getElementById('contact-message')?.focus()
      }, 500)
    }

    window.addEventListener('requestResume', handleRequestResume)
    window.addEventListener('requestProjectLink', handleProjectLinkRequest)
    
    return () => {
      window.removeEventListener('requestResume', handleRequestResume)
      window.removeEventListener('requestProjectLink', handleProjectLinkRequest)
    }
  }, [])

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setStatus(null)

    try {
      // Create mailto link with form details
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
      
      // Small artificial delay for UX
      await new Promise(resolve => setTimeout(resolve, 800))
      
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
      
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    } finally {
      setSending(false)
      setTimeout(() => setStatus(null), 5000)
    }
  }

  const contactDetails = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(personalInfo.location)}` },
  ]

  const socials = [
    { icon: Github, label: 'GitHub', href: personalInfo.github },
    { icon: Linkedin, label: 'LinkedIn', href: personalInfo.linkedin },
    { icon: Facebook, label: 'Facebook', href: personalInfo.facebook },
    { icon: Instagram, label: 'Instagram', href: personalInfo.instagram },
    { icon: Music2, label: 'TikTok', href: personalInfo.tiktok },
    { icon: Youtube, label: 'YouTube', href: personalInfo.youtube },
  ]

  return (
    <section id="contact" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-accent-600/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="container-max">
        {/* Header */}
        <div ref={sectionRef} className="reveal text-center mb-16">
          <span className="section-label">
            <MessageSquare size={13} />
            Contact
          </span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div ref={formRef} className="reveal">
          <div className="max-w-2xl mx-auto">
            {/* Form */}
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/[0.06] text-sm text-slate-900 dark:text-white
                               placeholder:text-slate-600
                               focus:outline-none focus:border-accent-500/40 focus:ring-2 focus:ring-accent-500/10 focus:bg-slate-100 dark:bg-slate-800/80
                               transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/[0.06] text-sm text-slate-900 dark:text-white
                               placeholder:text-slate-600
                               focus:outline-none focus:border-accent-500/40 focus:ring-2 focus:ring-accent-500/10 focus:bg-slate-100 dark:bg-slate-800/80
                               transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/[0.06] text-sm text-slate-900 dark:text-white
                               placeholder:text-slate-600 resize-none
                               focus:outline-none focus:border-accent-500/40 focus:ring-2 focus:ring-accent-500/10 focus:bg-slate-100 dark:bg-slate-800/80
                               transition-all duration-300"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status */}
                {status === 'success' && (
                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                    <CheckCircle size={16} />
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    <AlertCircle size={16} />
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>

          </div>
        </div>
      </div>
    </section>
  )
}
