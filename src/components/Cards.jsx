import { useState } from 'react'
import { about, experience, projects, smallProjects, skills, photos } from '../data'
import Modal from './Modal'
import { ChevronIcon } from './Icons'

const Html = ({ as: Tag = 'span', html, ...rest }) => (
  <Tag {...rest} dangerouslySetInnerHTML={{ __html: html }} />
)

function CardTitle({ num, children, plain = false }) {
  return (
    <div className="card-title">
      <span className="card-num">{num}</span>
      <h2 className={plain ? '' : 'hl'}>{children}</h2>
    </div>
  )
}

function ReadMore({ onClick }) {
  return (
    <button type="button" className="read-more" onClick={onClick}>
      <span>Read more →</span>
    </button>
  )
}

const Chips = ({ items, small }) => (
  <div className="chips">
    {items.map((t) => (
      <span key={t} className={`chip${small ? ' chip-sm' : ''}`}>
        {t}
      </span>
    ))}
  </div>
)

export function AboutCard() {
  return (
    <article className="card tint-green wobble-a">
      <CardTitle num="01">About</CardTitle>
      <Html as="p" className="about-lead" html={about.lead} />
      <p className="muted-p">{about.sub}</p>
      <div className="tags">
        {about.tags.map((t, i) => (
          <span key={t} className={`tag ${i % 2 ? 'wobble-sm-b' : 'wobble-sm'}`}>
            {t}
          </span>
        ))}
      </div>
    </article>
  )
}

export function ExperienceCard() {
  const [open, setOpen] = useState(false)
  return (
    <article className="card wobble-b">
      <CardTitle num="02">Experience</CardTitle>
      <div className="exp-head">
        <div className="exp-who">
          <span className="exp-company">{experience.company}</span>
          <span className="exp-title">{experience.title}</span>
        </div>
        <span className="pill">{experience.dates}</span>
      </div>
      <ul className="bullets">
        {experience.cardBullets.map((b) => (
          <Html as="li" key={b} html={b} />
        ))}
      </ul>
      <ReadMore onClick={() => setOpen(true)} />

      <Modal open={open} onClose={() => setOpen(false)} labelledBy="exp-title">
        <div className="modal-head">
          <span className="card-num">02 · Experience</span>
          <h2 id="exp-title" className="hl modal-h">{experience.company}</h2>
          <div className="exp-head-modal">
            <span className="exp-company-sm">{experience.title}</span>
            <span className="pill">{experience.dates}</span>
          </div>
          <p className="muted-p">{experience.summary}</p>
        </div>
        <section className="modal-sec">
          <h3 className="sec-h">What I do</h3>
          <ul className="bullets">
            {experience.bullets.map((b) => (
              <Html as="li" key={b} html={b} />
            ))}
          </ul>
        </section>
        <section className="modal-sec">
          <h3 className="sec-h">Highlights</h3>
          <div className="highlights">
            {experience.highlights.map((h, i) => (
              <div key={h.big} className={`highlight ${i % 2 ? 'wobble-sm-b' : 'wobble-sm'}`}>
                <span className="highlight-big">{h.big}</span>
                <span className="highlight-text">{h.text}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="modal-sec">
          <h3 className="sec-h">Stack</h3>
          <Chips items={experience.stack} />
        </section>
        <section className="modal-sec">
          <h3 className="sec-h">Worked with</h3>
          <Chips items={experience.workedWith} />
        </section>
      </Modal>
    </article>
  )
}

export function ProjectsCard() {
  const [open, setOpen] = useState(false)
  return (
    <article className="card tint-green wobble-c">
      <CardTitle num="03">Projects</CardTitle>
      <div className="proj-list">
        {projects.map((p, i) => {
          const shape = i % 2 ? 'wobble-sm-b' : 'wobble-sm'
          if (p.comingSoon) {
            return (
              <div key={p.name} className={`proj proj-soon ${shape}`}>
                <span className="proj-row">
                  <span className="proj-name">{p.name}</span>
                  <span className="proj-date">Coming soon</span>
                </span>
              </div>
            )
          }
          return (
            <a key={p.name} className={`proj proj-main small-proj ${shape}`} href={p.link} target="_blank" rel="noopener noreferrer">
              <span className="proj-row">
                <span className="proj-name">{p.name}</span>
                <span className="open-mini">Open ↗</span>
              </span>
              <span className="proj-tagline">{p.tagline}</span>
            </a>
          )
        })}
      </div>
      <ReadMore onClick={() => setOpen(true)} />

      <Modal open={open} onClose={() => setOpen(false)} labelledBy="proj-title" variant="b">
        <div className="modal-head">
          <span className="card-num">03 · Projects</span>
          <h2 id="proj-title" className="hl modal-h">Side Projects</h2>
          <p className="muted-p">Things I build outside of work, mostly for my church community.</p>
        </div>
        {projects.map((p) => (
          <section key={p.name} className="modal-sec ruled">
            <div className="proj-modal-head">
              <h3 className="proj-modal-name">{p.fullName}</h3>
              {!p.comingSoon && <span className="pill">{p.dates}</span>}
            </div>
            {p.link && (
              <a className="open-link" href={p.link} target="_blank" rel="noopener noreferrer">
                Open app ↗
              </a>
            )}
            {p.comingSoon ? (
              <span className="soon">Coming soon. Stay tuned!</span>
            ) : (
              <>
                <p className="muted-p">{p.summary}</p>
                <ul className="bullets">
                  {p.bullets.map((b) => (
                    <Html as="li" key={b} html={b} />
                  ))}
                </ul>
                <Chips items={p.stack} small />
              </>
            )}
          </section>
        ))}
      </Modal>
    </article>
  )
}

export function PhotoCard() {
  const [idx, setIdx] = useState(0)
  const step = (d) => setIdx((i) => (i + d + photos.length) % photos.length)
  const photo = photos[idx]
  return (
    <figure className="card photo-card wobble-d">
      <div className="photo-frame">
        <img key={photo.src} src={photo.src} alt={photo.alt} style={{ objectPosition: photo.pos }} />
        <button type="button" className="photo-nav prev" aria-label="Previous photo" onClick={() => step(-1)}>
          <ChevronIcon dir="left" />
        </button>
        <button type="button" className="photo-nav next" aria-label="Next photo" onClick={() => step(1)}>
          <ChevronIcon dir="right" />
        </button>
      </div>
      <figcaption className="photo-count">
        {idx + 1} / {photos.length}
      </figcaption>
      {/* Preload the rest so switching is instant */}
      <div hidden>
        {photos.map((p) => (
          <img key={p.src} src={p.src} alt="" loading="lazy" />
        ))}
      </div>
    </figure>
  )
}

export function SmallProjectsCard() {
  const [open, setOpen] = useState(false)
  return (
    <article className="card tint-green wobble-a">
      <CardTitle num="04" plain>Small Projects</CardTitle>
      <div className="proj-list">
        {smallProjects.map((p, i) => (
          <a
            key={p.name}
            className={`proj proj-main small-proj ${i % 2 ? 'wobble-sm-b' : 'wobble-sm'}`}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="proj-row">
              <span className="proj-name">{p.name}</span>
              <span className="open-mini">Open ↗</span>
            </span>
            <span className="proj-tagline">{p.tagline}</span>
            <span className="chips mini">
              {p.langs.map((l) => (
                <span key={l} className="chip chip-xs">{l}</span>
              ))}
            </span>
          </a>
        ))}
      </div>
      <button type="button" className="read-more ink" onClick={() => setOpen(true)}>
        <span>Read more →</span>
      </button>

      <Modal open={open} onClose={() => setOpen(false)} labelledBy="small-title">
        <div className="modal-head">
          <span className="card-num">04 · Small Projects</span>
          <h2 id="small-title" className="hl modal-h">Small Projects</h2>
          <p className="muted-p">Quick apps I built for people around me. Both are live, so give them a try.</p>
        </div>
        {smallProjects.map((p) => (
          <section key={p.name} className="modal-sec ruled">
            <div className="proj-modal-head">
              <h3 className="proj-modal-name">{p.fullName}</h3>
              <a className="open-link" href={p.link} target="_blank" rel="noopener noreferrer">
                {p.linkLabel}
              </a>
            </div>
            <p className="muted-p">{p.summary}</p>
            <ul className="bullets">
              {p.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <Chips items={p.stack} small />
          </section>
        ))}
      </Modal>
    </article>
  )
}

export function SkillsCard() {
  return (
    <article className="card wobble-b">
      <CardTitle num="05">Skills</CardTitle>
      {skills.map((s) => (
        <div key={s.group} className="skill-group">
          <span className="sec-h sm">{s.group}</span>
          <Chips items={s.items} small />
        </div>
      ))}
    </article>
  )
}
