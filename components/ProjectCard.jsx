export default function ProjectCard({ project }) {
  const hasScreenshot = project.screenshot;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border bg-surface-secondary/40 p-2 shadow-[0_20px_45px_rgba(15,23,42,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_30px_55px_rgba(59,130,246,0.12)]">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.2rem] bg-surface-secondary/50">
        {hasScreenshot ? (
          <img src={project.screenshot} alt={project.title} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sky-500/10 via-surface-secondary to-rose-500/10 p-8">
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-400/30 bg-sky-500/10 text-sky-400 dark:text-sky-300">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d={project.icon} />
                </svg>
              </div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-text">{project.title}</span>
            </div>
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-surface to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-sky-400/30 bg-surface/80 px-3 py-2 text-[9px] font-black uppercase tracking-[0.28em] text-sky-400 dark:text-sky-300 backdrop-blur-sm">
          {project.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col space-y-4 p-4">
        <h3 className="text-xl font-black tracking-[-0.05em] text-text">{project.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full border border-border bg-surface-secondary/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-text">
              {t}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-primary transition-colors duration-300 hover:text-primary-dark"
          >
            <span>Live demo</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
