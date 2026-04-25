'use client'
import { useScrollReveal } from './useScrollReveal'
import { useState } from 'react'

const projects = [
  {
    num: '01',
    title: 'E-Commerce Dashboard',
    description: 'A full-stack admin dashboard with real-time analytics, drag-and-drop widgets, and multi-store support. Handles 10k+ daily active users.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'PostgreSQL'],
    link: '#',
    github: '#',
    gradient: 'from-[#FF6B6B] to-[#FF8E53]',
    glow: 'rgba(255,107,107,0.15)',
    icon: '⚡',
    iconBg: 'from-[#FF6B6B] to-[#FF8E53]',
  },
  {
    num: '02',
    title: 'Design System',
    description: '40+ accessible, themeable components published to npm. Full Storybook documentation with visual regression testing and zero peer deps.',
    tags: ['React', 'Radix UI', 'CSS Modules', 'Storybook', 'Jest'],
    link: '#',
    github: '#',
    gradient: 'from-[#4D96FF] to-[#845EF7]',
    glow: 'rgba(77,150,255,0.15)',
    icon: '🧩',
    iconBg: 'from-[#4D96FF] to-[#845EF7]',
  },
  {
    num: '03',
    title: 'Weather App',
    description: 'Animated weather PWA with geolocation, beautiful D3 visualizations, and offline support. Sub-2s load time with service workers.',
    tags: ['React', 'D3.js', 'Service Workers', 'OpenWeather API'],
    link: '#',
    github: '#',
    gradient: 'from-[#6BCB77] to-[#4D96FF]',
    glow: 'rgba(107,203,119,0.15)',
    icon: '🌦',
    iconBg: 'from-[#6BCB77] to-[#4D96FF]',
  },
  {
    num: '04',
    title: 'Dev Blog',
    description: 'MDX-powered blog with syntax highlighting, full-text search, RSS feed, and sub-100ms page loads. 5k+ monthly readers.',
    tags: ['Next.js', 'MDX', 'Vercel', 'Algolia'],
    link: '#',
    github: '#',
    gradient: 'from-[#FFD93D] to-[#FF8E53]',
    glow: 'rgba(255,217,61,0.15)',
    icon: '✍️',
    iconBg: 'from-[#FFD93D] to-[#FF8E53]',
  },
  {
    num: '05',
    title: 'Task Manager',
    description: 'Collaborative task management app with real-time updates, drag-and-drop boards, and GitHub integration.',
    tags: ['React', 'Socket.io', 'Express', 'MongoDB'],
    link: '#',
    github: '#',
    gradient: 'from-[#845EF7] to-[#FF6B6B]',
    glow: 'rgba(132,94,247,0.15)',
    icon: '📋',
    iconBg: 'from-[#845EF7] to-[#FF6B6B]',
  },
  {
    num: '06',
    title: 'Portfolio Generator',
    description: 'CLI tool to scaffold portfolio sites from templates. 500+ GitHub stars, used by developers in 30+ countries.',
    tags: ['Node.js', 'CLI', 'Handlebars', 'npm'],
    link: '#',
    github: '#',
    gradient: 'from-[#4D96FF] to-[#6BCB77]',
    glow: 'rgba(77,150,255,0.15)',
    icon: '🚀',
    iconBg: 'from-[#4D96FF] to-[#6BCB77]',
  },
]

export default function Projects() {
  const ref = useScrollReveal()
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto" ref={ref}>
      <p className="animate-on-scroll font-mono text-[10px] uppercase tracking-[0.2em] text-white/20 mb-10 flex items-center gap-3">
        03 — Projects
        <span className="flex-1 h-px bg-white/5" />
      </p>

      <div className="animate-on-scroll delay-1 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <h2 className="font-display font-extrabold text-[clamp(1.8rem,4vw,3rem)] leading-tight">
          Featured{' '}
          <span className="bg-gradient-to-r from-[#FF6B6B] via-[#FFD93D] to-[#4D96FF] bg-clip-text text-transparent">
            work
          </span>
        </h2>
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer"
          className="font-mono text-[11px] uppercase tracking-widest text-white/25 hover:text-white transition-colors flex items-center gap-1.5">
          All on GitHub ↗
        </a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
        {projects.map((project, i) => (
          <div
            key={project.num}
            className={`animate-on-scroll delay-${(i % 3) + 1} relative bg-[#0A0A0F] p-6 group cursor-pointer transition-all duration-300 overflow-hidden ${
              'opacity-100'
            }`}
            onMouseEnter={() => setHovered(project.num)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Hover glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ background: `radial-gradient(circle at top left, ${project.glow}, transparent 60%)` }}
            />

            {/* Top row */}
            <div className="flex items-start justify-between mb-4">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.iconBg} flex items-center justify-center text-lg`}>
                {project.icon}
              </div>
              <div className="flex items-center gap-3">
                <a href={project.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}
                  className="font-mono text-[10px] uppercase tracking-wider text-white/20 hover:text-white/60 transition-colors">
                  GH
                </a>
                <a href={project.link} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}
                  className="font-mono text-[10px] uppercase tracking-wider text-white/20 hover:text-white/60 transition-colors">
                  ↗
                </a>
              </div>
            </div>

            <p className="font-mono text-[10px] text-white/20 mb-2">{project.num}</p>
            <h3 className={`font-display font-bold text-lg mb-2 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
              {project.title}
            </h3>
            <p className="text-[12px] leading-relaxed text-white/35 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag}
                  className="font-mono text-[9px] uppercase tracking-wider text-white/25 border border-white/8 px-2 py-1 rounded-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
