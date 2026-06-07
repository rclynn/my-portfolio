import { useEffect, useRef } from 'react'

/**
 * Intersection Observer hook for scroll-reveal animations.
 * Adds the "visible" class when the element enters the viewport.
 *
 * @param {Object}  options
 * @param {number}  options.threshold  - Visibility ratio to trigger (0-1)
 * @param {string}  options.rootMargin - CSS-style margin around root
 * @param {boolean} options.once       - Unobserve after first trigger
 * @returns {React.RefObject}
 */
export default function useReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -60px 0px',
  once = true,
} = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('visible')
          if (once) observer.unobserve(node)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return ref
}
