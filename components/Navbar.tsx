'use client'
import { useEffect, useState } from 'react'

const links = ['about', 'skills', 'projects', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0A0A0F]/90 backdrop-blur-md border-b border-white/5' : ''
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display font-extrabold text-lg bg-gradient-to-r from-[#FF6B6B] via-[#FFD93D] to-[#4D96FF] bg-clip-text text-transparent"
        >
          YN.
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)}
              className="text-[11px] uppercase tracking-widest text-white/30 hover:text-white transition-colors">
              {l}
            </button>
          ))}
          <button onClick={() => scrollTo('contact')}
            className="px-4 py-2 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white text-[11px] font-bold uppercase tracking-widest rounded-sm hover:opacity-80 transition-opacity">
            Hire me
          </button>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white/60 hover:text-white">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>
            }
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#0A0A0F] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)}
              className="text-left text-[11px] uppercase tracking-widest text-white/40 hover:text-white transition-colors">
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
