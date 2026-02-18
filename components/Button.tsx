import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href: string
  variant?: 'primary' | 'outline'
  className?: string
}

export default function Button({ 
  children, 
  href, 
  variant = 'primary',
  className = '' 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-colors duration-200'
  
  const variants = {
    primary: 'bg-gold text-background hover:bg-gold-muted',
    outline: 'border border-gold text-gold hover:bg-gold/10'
  }
  
  return (
    <Link 
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  )
}
