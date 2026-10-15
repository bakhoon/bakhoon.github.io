const common = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const InstagramIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth="2" {...common}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
)

export const MailIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth="2" {...common}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3.5 6l8.5 7 8.5-7" />
  </svg>
)

export const LinkedInIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth="2" {...common}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <line x1="8" y1="10.5" x2="8" y2="16.5" />
    <circle cx="8" cy="7.5" r="0.6" fill="currentColor" />
    <path d="M12 16.5v-6M12 13c0-1.6 1-2.7 2.4-2.7S16.5 11.4 16.5 13v3.5" />
  </svg>
)

export const GitHubIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth="2" {...common}>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
)

export const DownloadIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth="2.3" {...common}>
    <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
  </svg>
)

export const CloseIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth="2.5" {...common}>
    <path d="M5 5l14 14M19 5L5 19" />
  </svg>
)

export const ChevronIcon = ({ dir = 'right', size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth="2.5" {...common}>
    <path d={dir === 'left' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} />
  </svg>
)
