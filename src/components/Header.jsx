import { useState } from 'react'
import { links, character } from '../data'
import { InstagramIcon, MailIcon, LinkedInIcon, GitHubIcon, DownloadIcon } from './Icons'

const canHover = () =>
  typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches

function Walker() {
  const [jumping, setJumping] = useState(false)

  return (
    <button
      type="button"
      className={`walker${jumping ? ' is-jumping' : ''}`}
      aria-label="Jeremi running. Hover or tap to make him jump."
      aria-pressed={jumping}
      onMouseEnter={() => canHover() && setJumping(true)}
      onMouseLeave={() => canHover() && setJumping(false)}
      onClick={() => !canHover() && setJumping((j) => !j)}
    >
      <svg className="walker-ground" viewBox="0 0 300 10" aria-hidden="true">
        <g className="walker-dash">
          {Array.from({ length: 9 }, (_, i) => (
            <line key={i} x1={i * 40} y1="5" x2={i * 40 + 18} y2="5" />
          ))}
        </g>
      </svg>
      <span
        className="walker-run"
        aria-hidden="true"
        style={{
          backgroundImage: `url(${character.runSprite})`,
          '--frames': character.runFrames,
        }}
      />
      <img className="walker-jump" src={character.jump} alt="" />
    </button>
  )
}

export default function Header() {
  return (
    <header className="hdr">
      <a className="logo" href="#top">
        <span className="logo-name">JeremiahPark</span>
        <span className="logo-tld">.dev</span>
      </a>

      <Walker />

      <nav className="nav" aria-label="Contact">
        <a className="icon-btn resume-btn wobble-3" href={links.resume} download={links.resumeFileName} target="_blank" rel="noopener">
          <DownloadIcon />
          Resume
        </a>
        <a className="icon-btn wobble-1" href={links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <InstagramIcon />
        </a>
        <a className="icon-btn wobble-2" href={`mailto:${links.email}`} aria-label="Email">
          <MailIcon />
        </a>
        <a className="icon-btn wobble-3" href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <LinkedInIcon />
        </a>
        <a className="icon-btn wobble-2" href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <GitHubIcon />
        </a>
      </nav>
    </header>
  )
}
