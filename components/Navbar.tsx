'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from './Button'

interface NavbarProps {
  currentAudience: 'designer' | 'manufacturer'
}

export default function Navbar({ currentAudience }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return
    const close = () => setMenuOpen(false)
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [menuOpen])

  const switchAudience = currentAudience === 'designer' 
    ? { href: '/m', text: 'For Manufacturers' }
    : { href: '/', text: 'For Brands' }

  const primaryCta = currentAudience === 'designer'
    ? { href: 'https://app.jewelchain.net?utm_source=navbar&utm_medium=cta', text: 'Join as Brand' }
    : { href: 'https://app.jewelchain.net?utm_source=navbar&utm_medium=cta', text: 'Join Founding 50' }

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={currentAudience === 'designer' ? '/' : '/m'} className="text-xl font-bold tracking-wider">
            JEWEL CHAIN
          </Link>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-6">
            <Link 
              href={switchAudience.href}
              className="text-text-secondary hover:text-text-primary transition-colors text-sm"
            >
              {switchAudience.text}
            </Link>
            <Link 
              href="/contact"
              className="text-text-secondary hover:text-text-primary transition-colors text-sm"
            >
              Contact
            </Link>
            <Button href={primaryCta.href} variant="primary" className="text-sm">
              {primaryCta.text}
            </Button>
          </div>

          {/* Mobile nav */}
          <div className="flex sm:hidden items-center gap-3" onClick={e => e.stopPropagation()}>
            <Button href={primaryCta.href} variant="primary" className="text-xs px-3 py-1.5">
              {primaryCta.text}
            </Button>
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="p-2 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="4" y1="4" x2="16" y2="16" />
                  <line x1="16" y1="4" x2="4" y2="16" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="17" y2="6" />
                  <line x1="3" y1="10" x2="17" y2="10" />
                  <line x1="3" y1="14" x2="17" y2="14" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className="sm:hidden bg-background/98 backdrop-blur-sm border-b border-border px-4 pb-4 pt-2"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex flex-col gap-4">
            <Link
              href={switchAudience.href}
              className="text-text-secondary hover:text-text-primary transition-colors text-sm py-1"
              onClick={() => setMenuOpen(false)}
            >
              {switchAudience.text}
            </Link>
            <Link
              href="/contact"
              className="text-text-secondary hover:text-text-primary transition-colors text-sm py-1"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
