import Section from './Section'

export default function About() {
  return (
    <Section heading="about me">
      <p>Hi! I&apos;m a student at UT Austin studying Math &amp; Business Honors.</p>
      <p>
        I recently worked at{' '}
        <a
          href="https://www.palantir.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Palantir
        </a>{' '}
        on data synchronization. Before that, I worked at{' '}
        <a
          href="https://www.capitalone.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Capital One
        </a>{' '}
        building a greenfield reliability service.
      </p>
      <p>Outside of work, I enjoy reading, golfing, and trying new food.</p>
      <p>
        I would love to chat or grab a coffee. Reach out on {' '}
        <a
          href="https://www.linkedin.com/in/neelabh-vijayvargia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a> or {' '}
        <a
          href="mailto:neelabh.vijayvargia@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>.
      </p>
    </Section>
  )
}
