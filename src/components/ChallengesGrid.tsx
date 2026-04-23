'use client'

import { useState } from 'react'
import type { Challenge } from '@/lib/database.types'

// ── Types ──────────────────────────────────────────────────────────────────

interface Problem {
  id?: string
  title: string
  description: string
  location?: string
  source_url?: string
}

interface Idea {
  id?: string
  title: string
  description: string
  approach_tags: string[]
}

interface Product {
  name: string
  url?: string
  description: string
  similarity_score?: number
}

interface ValidationResult {
  products: Product[]
  differentiation: string
}

type Phase =
  | 'categories'
  | 'discovering'
  | 'problems'
  | 'generating'
  | 'ideas'
  | 'validating'
  | 'validation'

// ── Helpers ────────────────────────────────────────────────────────────────

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 text-sm mb-6 transition-opacity hover:opacity-70"
      style={{ color: 'var(--text-muted)' }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M10 7H4M6 4L3 7l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Back
    </button>
  )
}

function LoadingSpinner({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-4 py-20">
      <div
        className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
        style={{ borderColor: 'var(--accent, #22d3ee)', borderTopColor: 'transparent' }}
      />
      <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{label}</p>
    </div>
  )
}

function SectionHeader({ challenge, emoji }: { challenge: Challenge; emoji: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-2xl">{emoji}</span>
      <div>
        <span className="text-xs font-medium uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
          {challenge.name}
        </span>
      </div>
    </div>
  )
}

function TagBadge({ tag }: { tag: string }) {
  return (
    <span
      className="text-xs px-2 py-0.5 rounded-full border"
      style={{ color: 'var(--text-muted)', borderColor: 'var(--border)', background: 'var(--surface)' }}
    >
      {tag}
    </span>
  )
}

function SimilarityBar({ score }: { score: number }) {
  const pct = Math.round((score ?? 0.5) * 100)
  const color = pct >= 70 ? '#f59e0b' : pct >= 40 ? '#22d3ee' : '#84cc16'
  return (
    <div className="flex items-center gap-2 mt-1">
      <div className="flex-1 rounded-full h-1" style={{ background: 'var(--border)' }}>
        <div className="h-1 rounded-full transition-all" style={{ width: `${pct}%`, background: color }} />
      </div>
      <span className="text-xs tabular-nums" style={{ color: 'var(--text-muted)' }}>{pct}% similar</span>
    </div>
  )
}

// ── Challenge Card ─────────────────────────────────────────────────────────

function ChallengeCard({ challenge, onClick }: { challenge: Challenge; onClick: () => void }) {
  return (
    <button
      className={`challenge-card ${challenge.color_class} w-full text-left p-7 group`}
      onClick={onClick}
      aria-label={`Explore ${challenge.name} challenges`}
    >
      <div className="relative z-10 flex flex-col gap-5 h-full">
        <span className="text-4xl leading-none emoji-glow">{challenge.emoji}</span>
        <div className="flex flex-col gap-2 flex-1">
          <h2 className="text-xl font-semibold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            {challenge.name}
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {challenge.description}
          </p>
        </div>
        <div className="flex items-center justify-between pt-1">
          {challenge.sdg_mapping && (
            <span className="sdg-badge">{challenge.sdg_mapping}</span>
          )}
          <span
            className="text-xs font-medium ml-auto flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ color: 'var(--accent)' }}
          >
            Explore
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </button>
  )
}

// ── Problem Card ───────────────────────────────────────────────────────────

function ProblemCard({ problem, accentClass, onClick }: { problem: Problem; accentClass: string; onClick: () => void }) {
  return (
    <button
      className={`challenge-card ${accentClass} w-full text-left p-6 group`}
      onClick={onClick}
    >
      <div className="relative z-10">
        <h3 className="text-base font-semibold mb-2 leading-snug" style={{ color: 'var(--text-primary)' }}>
          {problem.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
          {problem.description}
        </p>
        <div className="flex items-center justify-between">
          {problem.location && (
            <span className="text-xs flex items-center gap-1" style={{ color: 'var(--text-muted)' }}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <circle cx="5" cy="4" r="2" stroke="currentColor" strokeWidth="1.2" />
                <path d="M5 10C5 10 1.5 6.5 1.5 4a3.5 3.5 0 0 1 7 0C8.5 6.5 5 10 5 10z" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              {problem.location}
            </span>
          )}
          {problem.source_url && (
            <a
              href={problem.source_url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="text-xs underline-offset-2 hover:underline"
              style={{ color: 'var(--accent)' }}
            >
              Source ↗
            </a>
          )}
        </div>
        <div
          className="mt-4 pt-4 flex items-center justify-between border-t"
          style={{ borderColor: 'rgba(var(--accent-rgb),0.15)' }}
        >
          <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
            Generate ideas for this problem
          </span>
          <span
            className="text-xs font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ color: 'var(--accent)' }}
          >
            Select
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </button>
  )
}

// ── Idea Card ──────────────────────────────────────────────────────────────

function IdeaCard({ idea, accentClass, onValidate }: { idea: Idea; accentClass: string; onValidate: () => void }) {
  return (
    <div className={`challenge-card ${accentClass} p-6`}>
      <div className="relative z-10">
        <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
          {idea.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
          {idea.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {idea.approach_tags?.map(tag => <TagBadge key={tag} tag={tag} />)}
        </div>
        <button
          onClick={onValidate}
          className="text-xs font-medium flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-opacity hover:opacity-80"
          style={{ background: 'rgba(var(--accent-rgb),0.12)', color: 'var(--accent)', border: '1px solid rgba(var(--accent-rgb),0.25)' }}
        >
          Validate this idea
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}

// ── Main Component ─────────────────────────────────────────────────────────

export default function ChallengesGrid({ challenges }: { challenges: Challenge[] }) {
  const [phase, setPhase] = useState<Phase>('categories')
  const [challenge, setChallenge] = useState<Challenge | null>(null)
  const [problems, setProblems] = useState<Problem[]>([])
  const [problemSource, setProblemSource] = useState<'live' | 'seeded'>('live')
  const [problem, setProblem] = useState<Problem | null>(null)
  const [ideas, setIdeas] = useState<Idea[]>([])
  const [idea, setIdea] = useState<Idea | null>(null)
  const [validation, setValidation] = useState<ValidationResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  const accentClass = challenge?.color_class ?? 'challenge-ocean'

  async function handleChallengeSelect(c: Challenge) {
    setChallenge(c)
    setPhase('discovering')
    setError(null)

    try {
      const res = await fetch('/api/discover-problems', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          challengeId: c.id,
          challengeName: c.name,
          challengeDescription: c.description,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setProblems(data.problems)
      setProblemSource(data.source)
      setPhase('problems')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Discovery failed')
      setPhase('categories')
    }
  }

  async function handleProblemSelect(p: Problem) {
    setProblem(p)
    setPhase('generating')
    setError(null)

    try {
      const res = await fetch('/api/generate-ideas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          problemTitle: p.title,
          problemDescription: p.description,
          challengeName: challenge?.name,
          challengeId: challenge?.id,
          problemId: p.id,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setIdeas(data.ideas)
      setPhase('ideas')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Generation failed')
      setPhase('problems')
    }
  }

  async function handleValidate(i: Idea) {
    setIdea(i)
    setPhase('validating')
    setError(null)

    try {
      const res = await fetch('/api/validate-idea', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ideaTitle: i.title,
          ideaDescription: i.description,
          challengeName: challenge?.name,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setValidation(data)
      setPhase('validation')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Validation failed')
      setPhase('ideas')
    }
  }

  // ── Phase: categories ────────────────────────────────────────────────────
  if (phase === 'categories') {
    return (
      <div className="w-full max-w-4xl mx-auto">
        {error && (
          <div className="mb-4 px-4 py-3 rounded-xl text-sm" style={{ background: 'rgba(244,114,182,0.08)', border: '1px solid rgba(244,114,182,0.2)', color: '#f472b6' }}>
            {error}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {challenges.map(c => (
            <ChallengeCard key={c.id} challenge={c} onClick={() => handleChallengeSelect(c)} />
          ))}
        </div>
      </div>
    )
  }

  // ── Phase: discovering ───────────────────────────────────────────────────
  if (phase === 'discovering') {
    return (
      <div className={`${accentClass} w-full max-w-3xl mx-auto`}>
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl">{challenge?.emoji}</span>
          <span className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{challenge?.name}</span>
        </div>
        <LoadingSpinner label="Searching the web for current real-world problems…" />
      </div>
    )
  }

  // ── Phase: problems ──────────────────────────────────────────────────────
  if (phase === 'problems') {
    return (
      <div className={`${accentClass} w-full max-w-3xl mx-auto`}>
        <BackButton onClick={() => setPhase('categories')} />
        <SectionHeader challenge={challenge!} emoji={challenge!.emoji} />

        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>
            Real problems happening right now
          </h2>
          {problemSource === 'live' && (
            <span className="flex items-center gap-1.5 text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(34,197,94,0.1)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.2)' }}>
              <span className="live-dot" style={{ width: 6, height: 6 }} />
              Live
            </span>
          )}
        </div>

        {error && (
          <div className="mb-4 px-4 py-3 rounded-xl text-sm" style={{ background: 'rgba(244,114,182,0.08)', border: '1px solid rgba(244,114,182,0.2)', color: '#f472b6' }}>
            {error}
          </div>
        )}

        <div className="flex flex-col gap-4">
          {problems.map((p, i) => (
            <ProblemCard
              key={p.id ?? i}
              problem={p}
              accentClass={accentClass}
              onClick={() => handleProblemSelect(p)}
            />
          ))}
        </div>

        <p className="mt-6 text-xs text-center" style={{ color: 'var(--text-muted)' }}>
          Select a problem to generate buildable solution ideas
        </p>
      </div>
    )
  }

  // ── Phase: generating ────────────────────────────────────────────────────
  if (phase === 'generating') {
    return (
      <div className={`${accentClass} w-full max-w-3xl mx-auto`}>
        <SectionHeader challenge={challenge!} emoji={challenge!.emoji} />
        <div
          className="rounded-xl p-4 mb-6 text-sm"
          style={{ background: 'rgba(var(--accent-rgb),0.08)', border: '1px solid rgba(var(--accent-rgb),0.15)', color: 'var(--text-secondary)' }}
        >
          <span className="font-medium block mb-1" style={{ color: 'var(--accent)' }}>Selected problem</span>
          {problem?.title}
        </div>
        <LoadingSpinner label="Generating buildable solution ideas…" />
      </div>
    )
  }

  // ── Phase: ideas ─────────────────────────────────────────────────────────
  if (phase === 'ideas') {
    return (
      <div className={`${accentClass} w-full max-w-3xl mx-auto`}>
        <BackButton onClick={() => setPhase('problems')} />
        <SectionHeader challenge={challenge!} emoji={challenge!.emoji} />

        <div
          className="rounded-xl p-4 mb-6 text-sm"
          style={{ background: 'rgba(var(--accent-rgb),0.08)', border: '1px solid rgba(var(--accent-rgb),0.15)' }}
        >
          <span className="text-xs font-medium uppercase tracking-wider block mb-1" style={{ color: 'var(--accent)' }}>Problem</span>
          <span style={{ color: 'var(--text-secondary)' }}>{problem?.title}</span>
        </div>

        <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
          3 ideas you could build
        </h2>

        {error && (
          <div className="mb-4 px-4 py-3 rounded-xl text-sm" style={{ background: 'rgba(244,114,182,0.08)', border: '1px solid rgba(244,114,182,0.2)', color: '#f472b6' }}>
            {error}
          </div>
        )}

        <div className="flex flex-col gap-4">
          {ideas.map((i, idx) => (
            <IdeaCard
              key={i.id ?? idx}
              idea={i}
              accentClass={accentClass}
              onValidate={() => handleValidate(i)}
            />
          ))}
        </div>

        <p className="mt-6 text-xs text-center" style={{ color: 'var(--text-muted)' }}>
          Validate an idea to see what already exists and how yours differs
        </p>
      </div>
    )
  }

  // ── Phase: validating ────────────────────────────────────────────────────
  if (phase === 'validating') {
    return (
      <div className={`${accentClass} w-full max-w-3xl mx-auto`}>
        <SectionHeader challenge={challenge!} emoji={challenge!.emoji} />
        <div
          className="rounded-xl p-4 mb-6 text-sm"
          style={{ background: 'rgba(var(--accent-rgb),0.08)', border: '1px solid rgba(var(--accent-rgb),0.15)' }}
        >
          <span className="text-xs font-medium uppercase tracking-wider block mb-1" style={{ color: 'var(--accent)' }}>Validating idea</span>
          <span style={{ color: 'var(--text-secondary)' }}>{idea?.title}</span>
        </div>
        <LoadingSpinner label="Searching for similar products and landscape analysis…" />
      </div>
    )
  }

  // ── Phase: validation ────────────────────────────────────────────────────
  if (phase === 'validation' && validation) {
    return (
      <div className={`${accentClass} w-full max-w-3xl mx-auto`}>
        <BackButton onClick={() => setPhase('ideas')} />
        <SectionHeader challenge={challenge!} emoji={challenge!.emoji} />

        {/* The idea */}
        <div
          className="rounded-xl p-5 mb-6"
          style={{ background: 'rgba(var(--accent-rgb),0.08)', border: '1px solid rgba(var(--accent-rgb),0.2)' }}
        >
          <span className="text-xs font-medium uppercase tracking-wider block mb-1" style={{ color: 'var(--accent)' }}>Your idea</span>
          <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{idea?.title}</h3>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{idea?.description}</p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {idea?.approach_tags?.map(tag => <TagBadge key={tag} tag={tag} />)}
          </div>
        </div>

        {/* Existing products */}
        <h2 className="text-base font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
          What already exists
        </h2>
        <div className="flex flex-col gap-3 mb-6">
          {validation.products.map((p, i) => (
            <div
              key={i}
              className="rounded-xl p-4"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{p.name}</span>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs shrink-0 underline-offset-2 hover:underline"
                    style={{ color: 'var(--accent)' }}
                  >
                    Visit ↗
                  </a>
                )}
              </div>
              <p className="text-xs mb-2" style={{ color: 'var(--text-secondary)' }}>{p.description}</p>
              <SimilarityBar score={p.similarity_score ?? 0.5} />
            </div>
          ))}
        </div>

        {/* Differentiation */}
        <div
          className="rounded-xl p-5 mb-8"
          style={{ background: 'rgba(var(--accent-rgb),0.06)', border: '1px solid rgba(var(--accent-rgb),0.2)' }}
        >
          <h2 className="text-sm font-semibold mb-2" style={{ color: 'var(--accent)' }}>
            Your differentiation
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {validation.differentiation}
          </p>
        </div>

        {/* CTA */}
        <div className="flex gap-3">
          <button
            onClick={() => setPhase('ideas')}
            className="flex-1 py-3 rounded-xl text-sm font-medium transition-opacity hover:opacity-80"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
          >
            ← Try another idea
          </button>
          <button
            onClick={() => { setPhase('categories'); setChallenge(null); setProblems([]); setProblem(null); setIdeas([]); setIdea(null); setValidation(null) }}
            className="flex-1 py-3 rounded-xl text-sm font-medium transition-opacity hover:opacity-80"
            style={{ background: 'rgba(var(--accent-rgb),0.12)', border: '1px solid rgba(var(--accent-rgb),0.25)', color: 'var(--accent)' }}
          >
            Start over →
          </button>
        </div>
      </div>
    )
  }

  return null
}
