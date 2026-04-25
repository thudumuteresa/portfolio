'use client'
import { useScrollReveal } from './useScrollReveal'

const skills = [
  { name: 'React', color: 'from-[#FF6B6B] to-[#FF8E53]', bg: 'bg-[#FF6B6B]/10', border: 'border-[#FF6B6B]/20', text: 'text-[#FF6B6B]' },
  { name: 'Next.js', color: 'from-[#4D96FF] to-[#845EF7]', bg: 'bg-[#4D96FF]/10', border: 'border-[#4D96FF]/20', text: 'text-[#4D96FF]' },
  { name: 'TypeScript', color: 'from-[#4D96FF] to-[#6BCB77]', bg: 'bg-[#4D96FF]/10', border: 'border-[#4D96FF]/20', text: 'text-[#4D96FF]' },
  { name: 'Tailwind CSS', color: 'from-[#6BCB77] to-[#4D96FF]', bg: 'bg-[#6BCB77]/10', border: 'border-[#6BCB77]/20', text: 'text-[#6BCB77]' },
  { name: 'Framer Motion', color: 'from-[#845EF7] to-[#FF6B6B]', bg: 'bg-[#845EF7]/10', border: 'border-[#845EF7]/20', text: 'text-[#845EF7]' },
  { name: 'Node.js', color: 'from-[#6BCB77] to-[#FFD93D]', bg: 'bg-[#6BCB77]/10', border: 'border-[#6BCB77]/20', text: 'text-[#6BCB77]' },
  { name: 'Figma', color: 'from-[#FF6B6B] to-[#845EF7]', bg: 'bg-[#FF6B6B]/10', border: 'border-[#FF6B6B]/20', text: 'text-[#FF6B6B]' },
  { name: 'GraphQL', color: 'from-[#FF6B6B] to-[#FF8E53]', bg: 'bg-[#FF6B6B]/10', border: 'border-[#FF6B6B]/20', text: 'text-[#FF6B6B]' },
  { name: 'Vite', color: 'from-[#FFD93D] to-[#FF6B6B]', bg: 'bg-[#FFD93D]/10', border: 'border-[#FFD93D]/20', text: 'text-[#FFD93D]' },
  { name: 'Git', color: 'from-[#FF8E53] to-[#FFD93D]', bg: 'bg-[#FF8E53]/10', border: 'border-[#FF8E53]/20', text: 'text-[#FF8E53]' },
  { name: 'CSS / SCSS', color: 'from-[#4D96FF] to-[#845EF7]', bg: 'bg-[#845EF7]/10', border: 'border-[#845EF7]/20', text: 'text-[#845EF7]' },
  { name: 'Vercel', color: 'from-white/50 to-white/20', bg: 'bg-white/5', border: 'border-white/10', text: 'text-white/60' },
]

export default function Skills() {
  const ref = useScrollReveal()

  return (
    <section id="skills" className="py-28 px-6 max-w-6xl mx-auto" ref={ref}>
      <p className="animate-on-scroll font-mono text-[10px] uppercase tracking-[0.2em] text-white/20 mb-10 flex items-center gap-3">
        02 — Skills
        <span className="flex-1 h-px bg-white/5" />
      </p>

      <div className="animate-on-scroll delay-1 mb-10">
        <h2 className="font-display font-extrabold text-[clamp(1.8rem,4vw,3rem)] leading-tight">
          What I work with
        </h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map(({ name, bg, border, text }, i) => (
          <span key={name}
            className={`animate-on-scroll delay-${Math.min(i % 5 + 1, 5)} ${bg} border ${border} ${text} text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 cursor-default`}>
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}
