import { getChallenges } from '@/lib/challenges'
import ChallengesGrid from '@/components/ChallengesGrid'

export default async function Home() {
  const challenges = await getChallenges()

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--bg)' }}>
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2.5">
          <span className="text-base font-semibold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            AI for Social Good
          </span>
          <span
            className="text-xs px-2 py-0.5 rounded-full font-medium"
            style={{ background: 'rgba(34,211,238,0.1)', color: '#22d3ee', border: '1px solid rgba(34,211,238,0.2)' }}
          >
            beta
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
          <span className="live-dot" />
          <span>Live problems</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 pt-16 pb-14 max-w-4xl mx-auto w-full">
        <div
          className="text-xs font-medium tracking-widest uppercase mb-6 px-3 py-1.5 rounded-full"
          style={{ color: 'var(--text-muted)', border: '1px solid var(--border)' }}
        >
          Social Impact Idea Generator
        </div>

        <h1 className="hero-headline text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-5">
          The world has real<br />problems. Start here.
        </h1>

        <p className="text-lg max-w-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Pick a challenge. Discover specific problems happening right now.
          Generate buildable ideas. Leave with something you can actually pitch.
        </p>

        {/* Stats row */}
        <div
          className="flex items-center gap-8 mt-10 pt-8 border-t w-full justify-center"
          style={{ borderColor: 'var(--border)' }}
        >
          {[
            { value: '4', label: 'Challenge areas' },
            { value: '12', label: 'Seeded problems' },
            { value: '16+', label: 'Starter ideas' },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{value}</span>
              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Challenge cards */}
      <section className="flex flex-col items-center px-6 pb-20 flex-1">
        <div className="w-full max-w-4xl mb-6 flex items-center gap-3">
          <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
            Choose a challenge to explore
          </span>
          <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
        </div>

        <ChallengesGrid challenges={challenges} />
      </section>

      {/* Footer */}
      <footer
        className="text-center py-6 text-xs"
        style={{ color: 'var(--text-muted)', borderTop: '1px solid var(--border)' }}
      >
        Built for social entrepreneurs, founders, and anyone who wants to help.
      </footer>
    </div>
  )
}
