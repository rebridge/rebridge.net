import resume from './resume.js'

function Section({ title, children }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      {children}
    </section>
  )
}

function App() {
  const { name, title, summary, links, experience, education, skills } = resume

  return (
    <main className="resume">
      <header className="header">
        <h1>{name}</h1>
        <p className="title">{title}</p>
        <ul className="links">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <button className="print" onClick={() => window.print()}>
          Download PDF
        </button>
      </header>

      {summary && (
        <Section title="Summary">
          <p>{summary}</p>
        </Section>
      )}

      <Section title="Experience">
        {experience.map((job) => (
          <article className="entry" key={`${job.company}-${job.start}`}>
            <div className="entry-head">
              <h3>
                {job.role} <span className="muted">· {job.company}</span>
              </h3>
              <span className="dates">
                {job.start} – {job.end}
              </span>
            </div>
            {job.location && <p className="muted">{job.location}</p>}
            <ul>
              {job.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </Section>

      <Section title="Education">
        {education.map((ed) => (
          <article className="entry" key={ed.school}>
            <div className="entry-head">
              <h3>
                {ed.degree} <span className="muted">· {ed.school}</span>
              </h3>
              <span className="dates">
                {ed.start} – {ed.end}
              </span>
            </div>
          </article>
        ))}
      </Section>

      <Section title="Skills">
        <ul className="skills">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </Section>
    </main>
  )
}

export default App
