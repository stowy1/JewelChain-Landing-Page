import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xl font-bold tracking-wider">
            JEWEL CHAIN
          </div>
          <nav className="flex gap-6 text-sm text-text-secondary">
            <Link href="/" className="hover:text-text-primary transition-colors">
              For Brands
            </Link>
            <Link href="/m" className="hover:text-text-primary transition-colors">
              For Manufacturers
            </Link>
            <Link href="/#vsl" className="hover:text-text-primary transition-colors">
              How It Works
            </Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-text-muted text-sm">
          © 2026 Jewel Chain. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
