import Link from "next/link";
import {
  identity,
  education,
  experience,
  featured,
  more,
  skills,
  certifications,
  type Project,
} from "@/lib/content";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="inline -translate-y-px">
      <path d="M3 11 11 3M11 3H4.5M11 3v6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkPill({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper-raised px-3 py-1.5 text-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors"
    >
      {children} <ArrowIcon />
    </a>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line px-2.5 py-0.5 text-xs font-medium text-ink-muted">
      {children}
    </span>
  );
}

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="grid grid-cols-1 gap-5 border-t border-line py-8 first:border-t-0 first:pt-0 md:grid-cols-[3rem_1fr]">
      <div className="hidden text-2xl font-semibold tabular-nums text-line md:block">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-xl font-semibold tracking-tight text-ink">{project.name}</h3>
          <div className="flex gap-2">
            {project.demo && <LinkPill href={project.demo}>Live demo</LinkPill>}
            <LinkPill href={project.repo}>Code</LinkPill>
          </div>
        </div>
        <p className="max-w-2xl text-ink-muted">{project.tagline}</p>
        {project.facts.length > 0 && (
          <ul className="flex flex-col gap-1.5 text-sm text-ink">
            {project.facts.map((fact) => (
              <li key={fact} className="flex gap-2">
                <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-1 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
      </div>
    </article>
  );
}

function MoreCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-line bg-paper-raised p-4">
      <div className="flex items-start justify-between gap-2">
        <h4 className="font-medium text-ink">{project.name}</h4>
        <div className="flex shrink-0 gap-2 text-ink-muted">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.name} live demo`} className="hover:text-accent">
              <ArrowIcon />
            </a>
          )}
          <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.name} source code`} className="hover:text-accent">
            code
          </a>
        </div>
      </div>
      <p className="text-sm text-ink-muted">{project.tagline}</p>
      <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
        {project.stack.slice(0, 4).map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
          <span className="font-semibold tracking-tight text-ink">{identity.name}</span>
          <nav className="flex items-center gap-5 text-sm text-ink-muted">
            <a href="#work" className="hover:text-ink">Work</a>
            <a href="#skills" className="hover:text-ink">Skills</a>
            <a href="#contact" className="hover:text-ink">Contact</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-20 px-4 py-14 sm:px-6 sm:py-20">
        {/* Hero */}
        <section className="flex flex-col gap-6">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            {identity.role} · {identity.location}
          </p>
          <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {identity.summary}
          </h1>
          <div className="flex flex-wrap gap-2.5 pt-1">
            <LinkPill href="#work">Selected work</LinkPill>
            <LinkPill href={identity.github}>GitHub</LinkPill>
            <LinkPill href={identity.linkedin}>LinkedIn</LinkPill>
            <LinkPill href={`mailto:${identity.email}`}>{identity.email}</LinkPill>
          </div>
        </section>

        {/* Featured work */}
        <section id="work" className="flex flex-col gap-2 scroll-mt-20">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">Selected work</h2>
          <div className="flex flex-col">
            {featured.map((project, i) => (
              <FeaturedCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </section>

        {/* More projects */}
        <section className="flex flex-col gap-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">More projects</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {more.map((project) => (
              <MoreCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="flex flex-col gap-4 scroll-mt-20">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">Skills</h2>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <dt className="mb-1.5 text-sm font-medium text-ink">{group}</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {items.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Experience */}
        <section className="flex flex-col gap-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">Experience</h2>
          <div className="flex flex-col gap-6">
            {experience.map((job) => (
              <div key={job.org} className="flex flex-col gap-1.5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                  <p className="font-medium text-ink">
                    {job.role} <span className="font-normal text-ink-muted">· {job.org}</span>
                  </p>
                  <p className="text-sm tabular-nums text-ink-muted">{job.dates}</p>
                </div>
                <ul className="flex flex-col gap-1 text-sm text-ink-muted">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-line" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-2 flex flex-col gap-1.5 border-t border-line pt-4">
            <p className="font-medium text-ink">
              {education.degree} <span className="font-normal text-ink-muted">· {education.school}</span>
            </p>
            <p className="text-sm text-ink-muted">{education.dates} — {education.detail}</p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {certifications.map((c) => (
              <Tag key={c}>{c}</Tag>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="flex flex-col gap-3 rounded-xl border border-line bg-paper-raised p-6 scroll-mt-20 sm:p-8">
          <h2 className="text-xl font-semibold tracking-tight text-ink">Let&rsquo;s talk</h2>
          <p className="max-w-lg text-ink-muted">
            Open to software engineering roles — backend, full-stack, or platform.
            Based in {identity.location}.
          </p>
          <div className="flex flex-wrap gap-2.5 pt-1">
            <LinkPill href={`mailto:${identity.email}`}>{identity.email}</LinkPill>
            <LinkPill href={identity.github}>GitHub</LinkPill>
            <LinkPill href={identity.linkedin}>LinkedIn</LinkPill>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-4 py-6 text-sm text-ink-muted sm:px-6">
          <span>© {new Date().getFullYear()} {identity.name}</span>
          <Link href={identity.github} className="hover:text-ink">github.com/Aliipou</Link>
        </div>
      </footer>
    </>
  );
}
