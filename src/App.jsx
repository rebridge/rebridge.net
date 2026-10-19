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
  const { name, title, pdf, summary, links, experience, education, skills, volunteering } = resume

  return (
    <main className="resume">
      <header className="header">
        <h1>{name}</h1>
        {title && <p className="title">{title}</p>}
        <ul className="links">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <a className="print" href={pdf} download>
          Download PDF
        </a>
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
              <h3>{job.company}</h3>
              <span className="dates">
                {job.start} – {job.end}
              </span>
            </div>
            <ul className="roles">
              {job.roles.map((role) => (
                <li key={role.title}>
                  {role.title}{' '}
                  <span className="dates">
                    {role.start} – {role.end}
                  </span>
                </li>
              ))}
            </ul>
            {job.groups.map((group) => (
              <div className="group" key={group.heading}>
                <h4>{group.heading}</h4>
                <ul>
                  {group.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </article>
        ))}
      </Section>

      <Section title="Skills">
        <dl className="skills">
          {skills.map((skill) => (
            <div key={skill.category}>
              <dt>{skill.category}:</dt> <dd>{skill.items}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Education">
        {education.map((ed) => (
          <article className="entry" key={ed.school}>
            <div className="entry-head">
              <h3>{ed.school}</h3>
              <span className="dates">{ed.date}</span>
            </div>
            <p>
              {ed.degree}
              {ed.honors && (
                <>
                  , <em>{ed.honors}</em>
                </>
              )}
            </p>
            {ed.highlights && (
              <ul>
                {ed.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </Section>

      {volunteering && (
        <Section title="Volunteering">
          <ul className="list">
            {volunteering.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>
      )}
    </main>
  )
}

export default App
