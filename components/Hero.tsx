'use client'

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[-120px] right-[-120px] w-[500px] h-[500px] rounded-full bg-[#FF6B6B] opacity-[0.06] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full bg-[#4D96FF] opacity-[0.06] blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-[#845EF7] opacity-[0.04] blur-[80px] pointer-events-none" />

      <div className="relative space-y-6 max-w-4xl">
        <p
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/25 animate-fade-in opacity-0"
          style={{ animationFillMode: 'forwards' }}
        >
          Frontend Developer · Available for work
        </p>

        <h1 className="font-display font-extrabold text-[clamp(3rem,10vw,7rem)] leading-[0.92] tracking-tight">
          <span className="block animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            Building
          </span>
          <span className="block animate-fade-in opacity-0 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] bg-clip-text text-transparent"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            bold,
          </span>
          <span className="block animate-fade-in opacity-0 bg-gradient-to-r from-[#FFD93D] to-[#6BCB77] bg-clip-text text-transparent"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            beautiful
          </span>
          <span className="block animate-fade-in opacity-0"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            interfaces.
          </span>
        </h1>

        <p className="text-[14px] leading-[1.9] text-white/40 max-w-lg animate-fade-in opacity-0"
          style={{ animationDelay: '0.55s', animationFillMode: 'forwards' }}>
          I turn ideas into fast, interactive web experiences that users love.
          Specializing in React, Next.js, and pixel-perfect UI engineering.
        </p>

        <div className="flex items-center gap-4 pt-2 animate-fade-in opacity-0"
          style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
          <button onClick={() => scrollTo('projects')}
            className="px-6 py-3 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white text-[11px] font-bold uppercase tracking-widest hover:opacity-85 transition-opacity rounded-sm">
            View Projects ↓
          </button>
          <a href="/resume.pdf" download
            className="px-6 py-3 border border-white/10 text-white/50 text-[11px] font-bold uppercase tracking-widest hover:border-white/30 hover:text-white transition-all rounded-sm">
            Download CV
          </a>
        </div>

        {/* Stats row */}
        <div className="flex gap-8 pt-6 animate-fade-in opacity-0 border-t border-white/5"
          style={{ animationDelay: '0.85s', animationFillMode: 'forwards' }}>
          {[
            { num: '5+', label: 'Years exp.' },
            { num: '20+', label: 'Projects' },
            { num: '10+', label: 'Happy clients' },
          ].map(({ num, label }) => (
            <div key={label} className="space-y-0.5">
              <p className="font-extrabold text-2xl bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">{num}</p>
              <p className="text-[10px] uppercase tracking-widest text-white/25">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll line */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
        <span className="text-[9px] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  )
}
