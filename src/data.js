// All site content lives here. Edit this file to update text, links, and photos.

const base = import.meta.env.BASE_URL

export const links = {
  email: 'joon7853@gmail.com',
  instagram: 'https://www.instagram.com/bakjihoon_/',
  linkedin: 'https://www.linkedin.com/in/jeremiah-park-49a2b8170/',
  github: 'https://github.com/bakhoon',
  resume: `${base}Jeremiah_Park_Resume_2026.pdf`,
  resumeFileName: 'Jeremiah_Park_Resume_2026.pdf',
}

export const about = {
  lead: 'A <strong>software engineer</strong> with 4+ years of building backend APIs, frontend tools, and AWS event-driven systems.',
  sub: "I regularly track down complex production issues, and I'm drawn to scalability, reliability, and platform infrastructure.",
  tags: ['Korean American', 'Deaf', 'Software Developer'],
}

export const experience = {
  company: 'Relay Network',
  title: 'Software Engineer · Radnor, PA',
  dates: 'Feb 2022 to Now',
  cardBullets: [
    'Build Node.js, TypeScript, and PostgreSQL services powering APIs for <strong>100+ enterprise clients</strong>',
    'Design AWS event-driven infrastructure with Lambda, EventBridge, S3, and Terraform',
    'Ship client-facing features like <strong>PowerUps form prefill</strong> and Smart Actions',
  ],
  summary:
    'Backend services, APIs, and event-driven workflows behind client-facing features used by 100+ enterprise clients.',
  bullets: [
    'Build and maintain backend services in Node.js, TypeScript, and PostgreSQL powering APIs and event-driven workflows for 100+ enterprise clients',
    'Work directly with client teams to investigate production bugs, trace root causes, and deliver fixes end to end',
    'Design and deploy AWS infrastructure with Lambda, EventBridge, S3, and Terraform for file delivery and event-driven processing',
    'Improve client-facing features, including <strong>PowerUps form prefill</strong>, Smart Actions, and the Push API configuration UI, with integration tests',
  ],
  highlights: [
    { big: '100+', text: 'enterprise clients running on the APIs and workflows I build' },
    { big: 'Kafka → Confluent', text: 'Migrated Kafka integrations and set up LocalStack for local AWS testing' },
  ],
  stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Kafka', 'AWS Lambda', 'EventBridge', 'S3', 'Terraform', 'LocalStack'],
  workedWith: ['Client teams', 'GTM', 'Customer Success', 'Implementation'],
}

export const projects = [
  {
    name: 'Han-Eng AI Record',
    fullName: 'Han-Eng AI Record',
    dates: 'Jul 2026 to Now',
    tagline: 'Live Korean + English captions with AI summaries',
    link: 'https://bakhoon.github.io/ai-audio-capture/',
    summary:
      "A live caption web app for my small-group meetings, where Korean and English are mixed. I've been building it for about three months.",
    bullets: [
      'Real-time Korean and English speech-to-text with Soniox, with Korean translations added under English lines as people talk',
      'Claude summarizes the conversation every 2 minutes, and the summaries plus the full transcript auto-save to one Google Drive file',
      'No server: API keys live only on my phone, so nobody else can use them, and it installs to the home screen like an app',
      'Builds and deploys to GitHub Pages with GitHub Actions',
    ],
    stack: ['React', 'JavaScript', 'Vite', 'Soniox STT', 'Claude API', 'Google Drive API', 'GitHub Actions'],
  },
  {
    name: 'Planning',
    fullName: 'Planning',
    dates: 'Oct 2026',
    tagline: 'Security-first planner with Google sign-in and Firestore',
    link: 'https://bakhoon.github.io/planning/',
    summary:
      'A clean, work-style planner for dates and to-dos, built security-first: API keys never touch the code, and only emails I approve can get in.',
    bullets: [
      '<strong>Keys stay out of the code:</strong> Firebase keys are never committed. They live only in my local .env file and GitHub Actions variables, and are injected at build time',
      '<strong>Locked down on the server:</strong> Firestore security rules only let verified Google accounts on my allowlist in. Everyone else is signed out automatically',
      'Each user can only read and write their own data, and only I can change the allowlist',
      'Week strip, date picker, and daily progress; add, edit, and check off Tasks, Meetings, Deadlines, and Notes; JSON backup and offline cache',
      'Deploys to GitHub Pages with GitHub Actions',
    ],
    stack: ['React', 'JavaScript', 'Vite', 'Firebase Auth', 'Firestore Security Rules', 'GitHub Actions'],
  },
  {
    name: 'Jesuwon Church Homepage',
    fullName: 'Jesuwon Church Homepage',
    comingSoon: true,
  },
  {
    name: 'Writer Blog',
    fullName: 'Writer Blog',
    comingSoon: true,
  },
]

export const smallProjects = [
  {
    name: 'Large-Print Bible',
    fullName: 'Large-Print Bible',
    tagline: 'Large-print Bible app for people with low vision',
    link: 'https://bakhoon.github.io/huge-bible/',
    linkLabel: 'Open app ↗',
    summary: 'A Bible web app for people with low vision, built around big text and big buttons.',
    bullets: [
      'Reading screen with the buttons always at the bottom: previous chapter, smaller, bigger, next chapter',
      'Read-aloud with the Web Speech API, highlighting the verse being read',
      '5 text sizes (28 to 56pt), light, dark, and high-contrast themes, 7:1 contrast, and screen reader labels on every button',
      'Installs as a PWA and works offline',
    ],
    langs: ['React', 'TypeScript', 'PWA'],
    stack: ['React', 'TypeScript', 'Vite', 'PWA', 'Web Speech API'],
  },
  {
    name: 'Crayon Ladder Game',
    fullName: 'Crayon Ladder Game',
    tagline: 'A ladder luck game you draw yourself, crayon style',
    link: 'https://bakhoon.github.io/ladder-luck-game/',
    linkLabel: 'Play ↗',
    summary: 'A ladder luck game with a crayon look, where you draw the ladder yourself.',
    bullets: [
      'Pick 2 to 10 players and how many "busts" there are',
      'Drag with a crayon to draw rungs, tap to erase, or hit Random',
      'Tap a player and watch them climb down the ladder you drew; results shuffle every round',
      'Builds and deploys to GitHub Pages with GitHub Actions',
    ],
    langs: ['React', 'JavaScript', 'Vite'],
    stack: ['React', 'JavaScript', 'Vite', 'GitHub Actions'],
  },
]

export const skills = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Java'] },
  { group: 'Frameworks', items: ['Node.js', 'React', 'Express', 'Fastify'] },
  { group: 'Cloud & Infra', items: ['AWS', 'Terraform', 'Kafka', 'LocalStack'] },
  { group: 'Data & Ops', items: ['PostgreSQL', 'MongoDB', 'DataDog', 'GitHub Actions'] },
]

export const photos = [
  { src: `${base}img/kick.jpg`, pos: '50% 40%', alt: 'Jeremi doing a high kick in a taekwondo gym' },
  { src: `${base}img/cherry.jpg`, pos: '45% 62%', alt: 'Jeremi looking up at cherry blossom trees' },
  { src: `${base}img/ferris.jpg`, pos: '45% 35%', alt: 'Jeremi lying on the grass with a ferris wheel behind him' },
  { src: `${base}img/mural.jpg`, pos: '55% 45%', alt: 'Jeremi leaning on a colorful Philly 250 mural' },
  { src: `${base}img/window.jpg`, pos: '50% 35%', alt: 'Jeremi leaning by a sunny window' },
  { src: `${base}img/mirror.jpg`, pos: '45% 35%', alt: 'Jeremi taking a mirror selfie' },
]

export const character = {
  runSprite: `${base}img/run_sprite.webp`,
  runFrames: 22,
  jump: `${base}img/jump.webp`,
}
