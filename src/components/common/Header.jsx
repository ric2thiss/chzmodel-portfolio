import { useState } from 'react'

export default function Header({ brandName = "CHZMODEL", roleTitle = "BEAUTY QUEEN & MODEL", navLinks = [] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Name */}
          <div className="flex-1">
            <a 
              href="#" 
              className="text-sm sm:text-base md:text-lg font-black tracking-wider text-neutral-900 uppercase hover:text-neutral-600 transition-colors"
            >
              {brandName}
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-widest text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Role Title */}
          <div className="flex-1 text-right">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-neutral-900 uppercase">
              {roleTitle}
            </span>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-4">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-neutral-900 hover:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-900 rounded-md"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMenuOpen}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 px-4 pt-4 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-sm font-bold uppercase tracking-widest text-neutral-800 hover:text-black py-2 border-b border-neutral-50"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
