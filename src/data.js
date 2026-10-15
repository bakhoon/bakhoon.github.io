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
    name: '예수원 Church Homepage',
    fullName: '예수원 Church Homepage',
    comingSoon: true,
  },
  {
    name: 'Writer Blog',
    fullName: 'Writer Blog',
    comingSoon: true,
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
