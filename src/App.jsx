import Header from './components/Header'
import { AboutCard, ExperienceCard, ProjectsCard, PhotoCard, ContactCard, SkillsCard } from './components/Cards'

export default function App() {
  return (
    <div className="page" id="top">
      <Header />
      <main className="cards">
        <AboutCard />
        <ExperienceCard />
        <ProjectsCard />
        <PhotoCard />
        <ContactCard />
        <SkillsCard />
      </main>
    </div>
  )
}
