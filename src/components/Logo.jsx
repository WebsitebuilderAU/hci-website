// Wordmark lockup for Harris Cleaning Industry's.
// Uses a monogram H/C mark to the left of the text so it works at small sizes.
export default function Logo({ variant = 'dark' }) {
  const markBg = variant === 'dark' ? 'bg-navy-900' : 'bg-white'
  const markFg = variant === 'dark' ? 'text-white' : 'text-navy-900'
  const nameColor = variant === 'dark' ? 'text-navy-900' : 'text-white'
  const subColor = variant === 'dark' ? 'text-slate-500' : 'text-navy-200'

  return (
    <div className="flex items-center gap-2.5">
      <div className={`w-10 h-10 rounded-card ${markBg} flex items-center justify-center`} aria-hidden="true">
        <svg viewBox="0 0 32 32" className={`w-5 h-5 ${markFg}`} fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
          {/* H */}
          <path d="M7 7v18M7 16h8M15 7v18" />
          {/* C */}
          <path d="M26 11a5 5 0 0 0-5-5" />
          <path d="M26 21a5 5 0 0 1-5 5" />
          <path d="M21 6v20" />
        </svg>
      </div>
      <div className="leading-tight">
        <p className={`font-bold text-[15px] ${nameColor} tracking-tight`}>Harris Cleaning</p>
        <p className={`text-[10px] ${subColor} uppercase tracking-[0.18em] font-semibold`}>Industry's</p>
      </div>
    </div>
  )
}
