'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar currentAudience="designer" />

      <section className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="w-full max-w-xl">
          {submitted ? (
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">Message received.</h1>
              <p className="text-text-secondary">
                We'll get back to you within one business day.
              </p>
            </div>
          ) : (
            <>
              <h1 className="text-3xl sm:text-4xl font-bold mb-3">Contact us</h1>
              <p className="text-text-secondary mb-10">
                Whether you're a brand looking to source or a manufacturer ready to list — get in touch and we'll follow up directly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-text-secondary mb-1.5" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-surface border border-border rounded-md px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-text-secondary mb-1.5" htmlFor="company">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Brand or workshop name"
                      className="w-full bg-surface border border-border rounded-md px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-text-secondary mb-1.5" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full bg-surface border border-border rounded-md px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-text-secondary mb-1.5" htmlFor="role">
                    I am a…
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    value={form.role}
                    onChange={handleChange}
                    className="w-full bg-surface border border-border rounded-md px-4 py-3 text-text-primary focus:outline-none focus:border-gold transition-colors appearance-none"
                  >
                    <option value="" disabled>Select your role</option>
                    <option value="brand">Brand / Designer</option>
                    <option value="manufacturer">Manufacturer</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-text-secondary mb-1.5" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what you're looking for…"
                    className="w-full bg-surface border border-border rounded-md px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-background font-medium py-3 rounded-md hover:bg-gold-muted transition-colors"
                >
                  Send message
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
