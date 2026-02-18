'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from './Button'

interface NavbarProps {
  currentAudience: 'designer' | 'manufacturer'
}

export default function Navbar({ currentAudience }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
          
          <div className="flex items-center gap-6">
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
        </div>
      </div>
    </nav>
  )
}
