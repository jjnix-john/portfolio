import Image from "next/image";

export default function ProjectCard({ project }) {
  const hasScreenshot = project.screenshot;

  return (
    <div className="group bg-white border border-stone-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-stone-300 transition-all flex flex-col">
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
        {hasScreenshot ? (
          <Image
            src={project.screenshot}
            alt={project.title}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-2xl flex items-center justify-center" style={{ background: project.gradient }}>
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path d={project.icon} />
                </svg>
              </div>
              <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">{project.title}</span>
            </div>
          </div>
        )}
        <span className="absolute top-3 left-3 text-[11px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-sm text-stone-600 border border-stone-200/50">
          {project.tag}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-stone-900 mb-1.5">{project.title}</h3>
        <p className="text-sm text-stone-500 leading-relaxed flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs font-medium rounded-md"
            >
              {t}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
