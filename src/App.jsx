import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import Section from './components/Section.jsx'
import Badge from './components/Badge.jsx'
import ExperienceItem from './components/ExperienceItem.jsx'
import Footer from './components/Footer.jsx'
import data from './data/resume.json'
import { useTheme } from './lib/theme.js'

export default function App() {
  const [query, setQuery] = useState('')
  const [activeSkill, setActiveSkill] = useState(null)
  const [theme, setTheme] = useState('light')
  const themeCtl = useTheme()

  useEffect(() => {
    themeCtl.init()
    const stored = localStorage.getItem('theme')
    setTheme(stored ?? 'light')
  }, [])

  const filteredExperience = useMemo(() => {
    if (!activeSkill) return data.experience
    const q = activeSkill.toLowerCase()
    return data.experience.filter(e =>
      e.bullets.join(' ').toLowerCase().includes(q) ||
      e.title.toLowerCase().includes(q) ||
      e.company.toLowerCase().includes(q)
    )
  }, [activeSkill])

  const filteredSkills = useMemo(() => {
    if (!query) return data.skills
    return data.skills.filter(s => s.toLowerCase().includes(query.toLowerCase()))
  }, [query])

  const applyTheme = (mode) => {
    setTheme(mode)
    themeCtl.set(mode)
  }

  const printCV = () => window.print()

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100">
      <Header
        name={data.name}
        title={data.title}
        contacts={data.contacts}
        onPrint={printCV}
        theme={theme}
        onTheme={applyTheme}
      />

      <main className="mx-auto max-w-4xl px-4">
        <Section title="PROFILE">
          <p className="leading-relaxed">{data.summary}</p>
        </Section>

        <Section title="Skills">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {data.skills.map(s => (
              <div
                key={s}
                className="rounded-lg bg-slate-50 dark:bg-slate-900 px-4 py-2 text-left font-small hover:bg-slate-50 dark:hover:bg-slate-700 transition"
              >
                {s}
              </div>
            ))}
          </div>
        </Section>

        <Section title="Experience">
          <div className="space-y-5 mb-0">
            {filteredExperience.map((role, i) => <ExperienceItem role={role} key={i} />)}
          </div>
        </Section>

        <Section title="PROJECTS">
          <ul className="space-y-4">
            {data.projects.map((proj, i) => (
              <li key={i} className="pb-3">
                <a
                  href={proj.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-black dark:text-blue-400 hover:underline hover:cursor-pointer"
                >
                  {proj["Project Title"]}
                </a>
                <div className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                  {proj.Description}
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  <span className="font-medium">Tools:</span> {proj.Tools}
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Education">
          <ul className="space-y-3">
            {data.education.map((ed, i) => (
              <li key={i}>
                <div className="font-medium">{ed.degree} — <span className="text-slate-700 dark:text-slate-300">{ed.school}</span></div>
                <div className="text-sm text-slate-500">{ed.from} — {ed.to}</div>
                {ed.coursework?.length ? (
                  <div className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                    Coursework: {ed.coursework.join(', ')}
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Certifications">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {data.certifications.map((cert, i) => (
              <li key={i}>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:cursor-pointer"
                >
                  {cert.name}
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="LEADERSHIP">
          <ul className="list-disc pl-5 text-sm space-y-1">
            {data.leadership.map((l, i) => <li key={i}>{l}</li>)}
          </ul>
        </Section>

        <Section title="INTERESTS">
          <div className="mt-2 text-sm">
            {data.interests.join(', ')}
          </div>
        </Section>

        <Footer />
      </main>
    </div>
  )
}
