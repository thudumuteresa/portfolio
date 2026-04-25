'use client'
import { useScrollReveal } from './useScrollReveal'
import { useState } from 'react'

export default function Contact() {
  const ref = useScrollReveal()
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('your@email.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-28 px-6 max-w-6xl mx-auto relative overflow-hidden" ref={ref}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF6B6B] opacity-[0.04] blur-[100px] pointer-events-none" />

      <p className="animate-on-scroll font-mono text-[10px] uppercase tracking-[0.2em] text-white/20 mb-10 flex items-center gap-3">
        04 — Contact
        <span className="flex-1 h-px bg-white/5" />
      </p>

      <div className="animate-on-scroll delay-1 relative border border-white/5 p-10 md:p-16 text-center space-y-8 mb-16">
        <h2 className="font-display font-extrabold text-[clamp(2.5rem,8vw,6rem)] leading-tight">
          Let's build
          <br />
          <span className="bg-gradient-to-r from-[#FF6B6B] via-[#FFD93D] to-[#4D96FF] bg-clip-text text-transparent">
            something
          </span>
          <br />
          great.
        </h2>
        <p className="text-[13px] text-white/30 max-w-sm mx-auto leading-relaxed">
          Have a project in mind, or just want to say hi? My inbox is always open.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button onClick={copyEmail}
            className="flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white font-bold text-[11px] uppercase tracking-widest hover:opacity-80 transition-opacity rounded-sm">
            {copied ? (
              <><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg> Copied!</>
            ) : (
              <>thudumu.teresa@gmail.com <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></>
            )}
          </button>
          <a href="/resume.pdf" download
            className="flex items-center gap-2.5 px-6 py-3 border border-white/10 text-white/40 font-bold text-[11px] uppercase tracking-widest hover:border-white/30 hover:text-white transition-all rounded-sm">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download résumé
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="animate-on-scroll delay-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          {[
            { label: 'GitHub', href: 'https://github.com/yourusername', color: 'hover:text-[#FF6B6B]' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile', color: 'hover:text-[#4D96FF]' },
          ].map(({ label, href, color }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              className={`font-mono text-[11px] uppercase tracking-widest text-white/20 ${color} transition-colors`}>
              {label}
            </a>
          ))}
        </div>
        <p className="font-mono text-[10px] text-white/15 tracking-widest uppercase">
          © {new Date().getFullYear()} Your Name
        </p>
      </div>
    </section>
  )
}
