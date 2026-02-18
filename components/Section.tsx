import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  variant?: 'default' | 'surface'
  className?: string
  id?: string
}

export default function Section({ 
  children, 
  variant = 'default',
  className = '',
  id
}: SectionProps) {
  const backgroundClass = variant === 'surface' ? 'bg-surface' : ''
  
  return (
    <section id={id} className={`py-24 ${backgroundClass} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}
