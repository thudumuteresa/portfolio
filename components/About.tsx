'use client'
import { useScrollReveal } from './useScrollReveal'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="py-28 px-6 max-w-6xl mx-auto" ref={ref}>
      <p className="animate-on-scroll font-mono text-[10px] uppercase tracking-[0.2em] text-white/20 mb-10 flex items-center gap-3">
        01 — About
        <span className="flex-1 h-px bg-white/5" />
      </p>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <h2 className="animate-on-scroll delay-1 font-display font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] bg-clip-text text-transparent">
              Teresa.
            </span>
          </h2>
          <p className="animate-on-scroll delay-2 text-[13px] leading-[1.9] text-white/40">
            I'm a frontend developer with a passion for building products that are
            both beautiful and blazing fast. I care about the intersection of
            design and engineering — those tiny details that elevate a product from
            good to exceptional.
          </p>
          <p className="animate-on-scroll delay-3 text-[13px] leading-[1.9] text-white/40">
            When I'm not coding, you'll find me exploring new design systems,
            contributing to open source, or obsessing over typography choices.
          </p>
          <div className="animate-on-scroll delay-4 flex flex-wrap gap-3 pt-2">
            {['Open to work', 'Remote friendly', 'Hyderabad, India'].map((badge) => (
              <span key={badge}
                className="text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/8 text-white/30">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="animate-on-scroll delay-2 space-y-0">
          {[
            { label: 'Location', value: 'Hyderabad, India', color: 'text-[#FF6B6B]' },
            { label: 'Experience', value: '5+ years', color: 'text-[#4D96FF]' },
            { label: 'Availability', value: 'Open to opportunities', color: 'text-[#6BCB77]' },
            { label: 'Education', value: 'B.Tech Computer Science', color: 'text-[#FFD93D]' },
            { label: 'Focus', value: 'React · Next.js · UX Engineering', color: 'text-[#845EF7]' },
          ].map(({ label, value, color }, i) => (
            <div key={label}
              className={`flex justify-between items-center py-4 border-b border-white/5 group animate-on-scroll delay-${i + 2}`}>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">{label}</span>
              <span className={`text-[12px] font-semibold ${color}`}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
