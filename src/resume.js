// All resume content lives here. Edit this file to update the site.
// Anything on this page is public — leave out your home address and personal phone.

const resume = {
  name: 'Robby Bridges',
  title: 'Your Job Title',
  summary:
    'A two or three sentence summary of who you are, what you do, and what you are looking for.',
  links: [
    { label: 'Email', href: 'mailto:you@example.com', text: 'you@example.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-handle', text: 'linkedin.com/in/your-handle' },
    { label: 'GitHub', href: 'https://github.com/rebridge', text: 'github.com/rebridge' },
  ],
  experience: [
    {
      role: 'Job Title',
      company: 'Company Name',
      location: 'City, ST',
      start: 'Jan 2023',
      end: 'Present',
      highlights: [
        'Accomplishment with a measurable result.',
        'Another accomplishment, ideally with numbers.',
      ],
    },
    {
      role: 'Previous Job Title',
      company: 'Previous Company',
      location: 'City, ST',
      start: 'Jun 2020',
      end: 'Dec 2022',
      highlights: ['What you built, led, or improved.'],
    },
  ],
  education: [
    {
      school: 'University Name',
      degree: 'B.S. in Your Major',
      start: '2016',
      end: '2020',
    },
  ],
  skills: ['Skill One', 'Skill Two', 'Skill Three', 'Skill Four'],
}

export default resume
