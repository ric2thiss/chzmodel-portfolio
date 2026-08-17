import { useScrollFadeIn } from '../../hooks/useScrollFadeIn'

/**
 * Wrapper that applies a CSS fade-in-section class driven by IntersectionObserver.
 * Children appear with a smooth translateY + opacity animation when scrolled into view.
 */
export default function FadeInSection({ children, className = '', as: Tag = 'div', ...props }) {
  const { ref, isVisible } = useScrollFadeIn()

  return (
    <Tag
      ref={ref}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
