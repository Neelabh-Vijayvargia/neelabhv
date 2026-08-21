export default function Section({ heading, children }) {
  return (
    <section className="mt-section">
      {heading ? (
        <h2 className="mb-heading text-heading font-extrabold text-ink">
          {heading}
        </h2>
      ) : null}
      <div className="flex flex-col gap-lede-xs sm:gap-lede [&_a]:text-inherit [&_a]:underline [&_a]:decoration-link [&_a]:decoration-underline [&_a]:underline-offset-link [&_a]:transition-colors [&_a]:duration-link [&_a]:hover:text-ink [&_a]:hover:decoration-underline-hover [&_p]:text-pretty [&_p]:text-copy [&_p]:font-semibold [&_p]:text-muted">
        {children}
      </div>
    </section>
  )
}
