// All resume content lives here. Edit this file to update the site.
// Anything on this page is public — leave out your home address and personal phone.

const resume = {
  name: 'Robby Bridges',
  pdf: '/Robby_Bridges_Resume.pdf',
  summary:
    'Software developer with leadership experience passionate about using AI to engineer delightful software. Five years at SAS across Java microservices, React front ends, and LLM-accelerated development.',
  links: [
    { label: 'Email', href: 'mailto:rebridge122@gmail.com', text: 'rebridge122@gmail.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/robby-bridges', text: 'linkedin.com/in/robby-bridges' },
    { label: 'GitHub', href: 'https://github.com/rebridge', text: 'github.com/rebridge' },
  ],
  experience: [
    {
      company: 'SAS Institute Inc.',
      start: '2021',
      end: 'Present',
      roles: [
        { title: 'Software Developer', start: '2026', end: 'Present' },
        { title: 'Senior Associate Software Developer', start: '2024', end: '2026' },
        { title: 'Associate Software Developer', start: '2023', end: '2024' },
        { title: 'Software Developer Intern', start: '2021', end: '2022' },
      ],
      groups: [
        {
          heading: 'Lead Developer, SAS Viya 4 Migration App (React / TypeScript)',
          highlights: [
            'Led a team of 8–10 developers to redesign and rebuild a web app used by nearly every customer migrating to SAS Viya 4.',
            'Represented the development team in product management and UX engagements; broke designs into independently developable and testable user stories and ran the team’s Agile process.',
            'Shipped in 7 months against a 9-month estimate by moving one feature to the next release; kept delivering new features in later releases, with overwhelmingly positive user feedback.',
            'Set API standards, owned complex and high-traffic areas of the codebase, and coordinated with the microservice lead on parallel backend changes.',
            'Grew a team that started with only two React developers through one-on-one pairing and team workshops.',
          ],
        },
        {
          heading: 'Backend Development (Java / Go)',
          highlights: [
            'Helped re-architect a critical part of the migration orchestration Java microservice, a legacy codebase with 40+ authors, without breaking API contracts or customers.',
            'Rewriting the service in Go; work day-to-day with Docker, Kubernetes, and CI/CD pipelines.',
          ],
        },
        {
          heading: 'AI / LLM Initiatives',
          highlights: [
            'Built a data analytics agent proof of concept in one week on a self-hosted Gemma 4 30B model, with tools to inspect CSV files, query them with model-generated SQL, and search documentation via vector search (RAG).',
            'Developed with the Strands SDK and hosted with Docker and Traefik on GPU; the concept is now being developed by an adjacent team.',
          ],
        },
        {
          heading: 'Infrastructure',
          highlights: ['Developed workflows to automate regular dependency upgrades and hotfixes.'],
        },
        {
          heading: 'Mentorship',
          highlights: [
            'Mentored every summer intern and several new hires since joining full time; one former intern has become the team’s onboarding liaison and has been promoted to Senior Associate.',
            'Wrote onboarding docs and procedures that cut new-teammate ramp-up from weeks to days.',
          ],
        },
        {
          heading: 'Speaking',
          highlights: [
            'Co-led a GitHub Copilot keynote workshop on stage alongside GitHub representatives, walking the audience from basic coding-agent use to complex agentic engineering with live examples.',
            'Presented at R&D user groups on helping coding agents verify their own work, including browser tools and Playwright MCP for front-end changes.',
            'Demoed the data analytics agent proof of concept in internal presentations.',
          ],
        },
      ],
    },
  ],
  skills: [
    { category: 'Languages', items: 'TypeScript, React, Java, Go, Python' },
    { category: 'Infrastructure', items: 'Git, Docker, Kubernetes, GitHub Workflows/Actions, CI/CD' },
    {
      category: 'AI',
      items:
        'Coding Agents (GitHub Copilot/Claude Code/Codex), LLM agents (Strands SDK), RAG and vector search, hosting LLMs on GPUs (Ollama)',
    },
  ],
  education: [
    {
      school: 'North Carolina State University',
      date: 'Fall 2022 (Go Pack!)',
      degree: 'B.S. Computer Science',
      honors: 'summa cum laude',
      highlights: [
        'Senior project: led a team building a computer vision application for landfill waste classification, in partnership with IBM.',
      ],
    },
  ],
  volunteering: [
    'Providence Church: Discipled high school students and served as their camp counselor for three summers.',
    'CRU NCSU: Volunteered as a Bible study leader.',
  ],
}

export default resume
