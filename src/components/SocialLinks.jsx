const links = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/neelabh-vijayvargia',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9H7.12v11.452Z',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/neelabh-vijayvargia',
    path: 'M12 .7A11.3 11.3 0 0 0 8.43 22.72c.57.1.78-.25.78-.55v-2.16c-3.18.69-3.85-1.35-3.85-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.54-.29-5.21-1.27-5.21-5.59 0-1.23.44-2.24 1.17-3.03-.12-.29-.51-1.45.11-2.99 0 0 .95-.31 3.11 1.16a10.8 10.8 0 0 1 5.66 0c2.16-1.47 3.11-1.16 3.11-1.16.62 1.54.23 2.7.11 2.99.73.79 1.17 1.8 1.17 3.03 0 4.33-2.68 5.29-5.23 5.58.41.36.78 1.05.78 2.12v3.14c0 .3.21.66.79.55A11.3 11.3 0 0 0 12 .7Z',
  },
]

export default function SocialLinks() {
  return (
    <nav
      aria-label="Social links"
      className="fixed top-4 right-4 z-10 flex gap-1 sm:top-6 sm:right-6"
    >
      {links.map(({ label, href, path }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex size-10 items-center justify-center rounded-full text-muted transition-colors duration-link hover:bg-ink/10 hover:text-ink focus-visible:bg-ink/10 focus-visible:text-ink"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="size-5 fill-current"
          >
            <path d={path} />
          </svg>
        </a>
      ))}
    </nav>
  )
}
