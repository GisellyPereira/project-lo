'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Logo from './Logo'

const links = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/blog', label: 'Blog' },
  { href: '/contato', label: 'Contato' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="container mx-auto px-4 flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <Logo variant="white" size="md" />
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link 
              key={l.href} 
              href={l.href} 
              className={`text-sm font-medium transition-colors ${
                pathname === l.href 
                  ? 'text-green-600' 
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contato" className="bg-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition-colors">
            Agendar Consulta
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  pathname === l.href 
                    ? 'text-green-600' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contato"
              onClick={() => setOpen(false)}
              className="block mt-4 bg-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition-colors text-center"
            >
              Agendar Consulta
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
