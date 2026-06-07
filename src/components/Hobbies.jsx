import { useState } from 'react'
import { Heart, Plane, Mountain, Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react'
import useReveal from '../hooks/useReveal'

const hobbies = [
  {
    title: 'Traveling',
    description: 'Exploring new cities, soaking in different cultures, and finding inspiration in every destination.',
    icon: Plane,
  },
  {
    title: 'Nature & Hiking',
    description: 'Chasing waterfalls, conquering summits, and finding peace on every trail.',
    icon: Mountain,
  },
  {
    title: 'Trying New Things',
    description: 'Always curious, always learning — from theme parks to flower farms, every experience counts.',
    icon: Sparkles,
  },
]

const galleryImages = [
  { src: '/hobbies/mountain-summit.jpg', caption: 'Standing on top of the world', span: 'col-span-2 row-span-2' },
  { src: '/hobbies/coastal-cliff.jpg', caption: 'Wind in my hair, ocean at my feet', span: '' },
  { src: '/hobbies/waterfall.jpg', caption: 'Chasing waterfalls', span: '' },
  { src: '/hobbies/mountain-terrace.jpg', caption: 'Sunset over the mountains', span: '' },
  { src: '/hobbies/coastal-hike.jpg', caption: 'Hiking the coastal trails', span: '' },
  { src: '/hobbies/img-5498.jpg', caption: 'Poolside city escape', span: '' },
  { src: '/hobbies/theme-park.jpg', caption: 'Fun day at Enchanted Kingdom', span: '' },
  { src: '/hobbies/img-4763.jpg', caption: 'Lost in the pine forest', span: 'col-span-2' },
  { src: '/hobbies/city-view.jpg', caption: 'Morning city views', span: '' },
  { src: '/hobbies/flower-farm-pink.jpg', caption: 'Surrounded by blooms', span: '' },
  { src: '/hobbies/flower-farm-white.jpg', caption: 'Exploring the flower gardens', span: '' },
  { src: '/hobbies/img-4755.jpg', caption: 'Hiking with friends', span: '' },
]

function Lightbox({ images, startIndex, onClose }) {
  const [index, setIndex] = useState(startIndex)
  const img = images[index]

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-black/85 backdrop-blur-md p-4"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      ref={(el) => el?.focus()}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="fixed top-4 right-4 md:absolute md:-top-12 md:right-0 w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center
                     text-slate-700 hover:bg-slate-300 dark:text-white/70 dark:hover:text-white dark:hover:bg-white/20 transition-all duration-300 z-[110]"
          aria-label="Close lightbox"
        >
          <X size={20} />
        </button>

        {/* Image */}
        <div className="relative w-full flex items-center justify-center">
          {images.length > 1 && (
            <button
              onClick={prev}
              className="absolute left-2 md:left-4 z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/50 dark:bg-black/40 backdrop-blur-md flex items-center justify-center
                         text-slate-700 hover:text-slate-900 hover:bg-white dark:text-white/70 dark:hover:text-white dark:hover:bg-black/60 transition-all duration-300 shadow-sm"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          <img
            src={img.src}
            alt={img.caption}
            className="h-[60vh] md:h-[75vh] max-w-full aspect-[3/4] rounded-2xl object-cover shadow-2xl"
          />

          {images.length > 1 && (
            <button
              onClick={next}
              className="absolute right-2 md:right-4 z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/50 dark:bg-black/40 backdrop-blur-md flex items-center justify-center
                         text-slate-700 hover:text-slate-900 hover:bg-white dark:text-white/70 dark:hover:text-white dark:hover:bg-black/60 transition-all duration-300 shadow-sm"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>

        {/* Caption + counter + dots */}
        <div className="mt-4 text-center">
          <p className="text-sm font-medium text-slate-900 dark:text-white/80 mb-1">{img.caption}</p>
          <p className="text-xs text-slate-500 dark:text-white/40 mb-3">{index + 1} / {images.length}</p>
          {images.length > 1 && (
            <div className="flex justify-center gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === index ? 'bg-accent-400 w-5' : 'bg-slate-300 hover:bg-slate-400 dark:bg-white/30 dark:hover:bg-white/50'
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Hobbies() {
  const sectionRef = useReveal()
  const gridRef = useReveal({ rootMargin: '0px 0px -40px 0px' })
  const galleryRef = useReveal({ rootMargin: '0px 0px -40px 0px' })
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = (startIndex) => {
    setLightbox({ startIndex })
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightbox(null)
    document.body.style.overflow = ''
  }

  return (
    <section id="hobbies" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-pink-600/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-accent-600/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="container-max">
        {/* Header */}
        <div ref={sectionRef} className="reveal text-center mb-6">
          <span className="section-label">
            <Heart size={13} />
            Beyond Code
          </span>
          <h2 className="section-title">Life Outside the Screen</h2>
          <p className="section-subtitle mx-auto">
            When I'm not writing code, you'll find me exploring the world, chasing sunsets, and embracing new adventures.
          </p>
        </div>

        {/* Photo Gallery — bento grid */}
        <div ref={galleryRef} className="reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-3 md:gap-4">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => openLightbox(i)}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out
                             group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                flex items-end p-4">
                  <p className="text-white text-sm font-medium">{img.caption}</p>
                </div>
                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-accent-500/30 transition-all duration-500" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          images={galleryImages}
          startIndex={lightbox.startIndex}
          onClose={closeLightbox}
        />
      )}
    </section>
  )
}
