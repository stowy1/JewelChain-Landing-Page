'use client'

import { useState } from 'react'
import Section from './Section'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
}

function FAQRow({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-base sm:text-lg font-medium text-text-primary">{question}</span>
        <span className="shrink-0 text-text-secondary transition-transform duration-200" style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="10" y1="4" x2="10" y2="16" />
            <line x1="4" y1="10" x2="16" y2="10" />
          </svg>
        </span>
      </button>
      {open && (
        <p className="pb-5 text-text-secondary text-sm sm:text-base leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  )
}

export default function FAQ({ items }: FAQProps) {
  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Common questions</h2>
          <p className="text-text-secondary">Everything you need to know before joining.</p>
        </div>
        <div>
          {items.map((item, i) => (
            <FAQRow key={i} {...item} />
          ))}
        </div>
      </div>
    </Section>
  )
}
