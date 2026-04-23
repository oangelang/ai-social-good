'use client'

import type { Challenge } from '@/lib/database.types'

interface Props {
  challenge: Challenge
  onClick: (challenge: Challenge) => void
}

export default function ChallengeCard({ challenge, onClick }: Props) {
  return (
    <button
      className={`challenge-card ${challenge.color_class} w-full text-left p-7 group`}
      onClick={() => onClick(challenge)}
      aria-label={`Explore ${challenge.name} challenges`}
    >
      <div className="relative z-10 flex flex-col gap-5 h-full">
        {/* Emoji */}
        <span className="text-4xl leading-none emoji-glow">{challenge.emoji}</span>

        {/* Text */}
        <div className="flex flex-col gap-2 flex-1">
          <h2 className="text-xl font-semibold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            {challenge.name}
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {challenge.description}
          </p>
        </div>

        {/* Footer */}
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
