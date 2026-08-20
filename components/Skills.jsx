const skillGroups = [
  {
    title: "Frontend",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend / Infra",
    tags: ["Supabase", "Node.js", "Python", "Express"],
  },
  {
    title: "Languages",
    tags: ["JavaScript", "TypeScript", "Python", "Java"],
  },
  {
    title: "Other",
    tags: ["REST/HTTP/TCP/UDP", "Selenium", "AI/LLM (Claude API)"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6 sm:py-32 bg-transparent transition-colors duration-300">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 inline-flex rounded-full border border-rose-400/30 bg-rose-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.35em] text-rose-400 dark:text-rose-300">
          Skills
        </p>
        <h2 className="mb-12 text-4xl font-black tracking-[-0.08em] text-text sm:text-5xl lg:text-6xl">
          Tech & tools
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, groupIdx) => (
            <div
              key={group.title}
              className="glass-panel animate-fade-up rounded-[1.75rem] border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              style={{ animationDelay: `${groupIdx * 0.1}s` }}
            >
              <h3 className="mb-5 border-b border-border pb-3 text-[10px] font-black uppercase tracking-[0.32em] text-primary">
                {group.title}
              </h3>
              <div className="flex flex-col gap-3">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tech-tag rounded-xl px-4 py-2 text-sm font-bold tracking-[0.04em] text-text transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4">
          {[
            { label: "Languages", value: "4+" },
            { label: "Frameworks", value: "6+" },
            { label: "Tools", value: "10+" },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass-panel animate-fade-up rounded-2xl border border-border p-4 text-center"
              style={{ animationDelay: `${(4 + i) * 0.1}s` }}
            >
              <p className="text-2xl font-black tracking-[-0.07em] text-rose-400 dark:text-rose-300 sm:text-3xl">{stat.value}</p>
              <p className="mt-2 text-[10px] font-black uppercase tracking-[0.22em] text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
