const skillGroups = [
  {
    title: "Core Languages",
    badge: "CS Foundations",
    color: "border-neo-orange bg-neo-orange/10 text-neo-orange",
    tags: [
      "JavaScript (ES6+)",
      "Java (OOP/Networking)",
      "C++",
      "Python",
      "PHP",
      "SQL",
      "TypeScript",
      "HTML5 & CSS3",
      "C",
    ],
  },
  {
    title: "Frontend Engineering",
    badge: "Modern UI/UX",
    color: "border-neo-teal bg-neo-teal/10 text-neo-teal",
    tags: [
      "React.js",
      "Next.js (App Router)",
      "Tailwind CSS",
      "Responsive Web Design",
      "Component Architecture",
      "State Management",
      "Neubrutalism & Modern UI",
    ],
  },
  {
    title: "Backend & Cloud",
    badge: "Scalable Systems",
    color: "border-neo-lilac bg-neo-lilac/10 text-neo-lilac",
    tags: [
      "Node.js",
      "Express.js",
      "Supabase (Auth & Storage)",
      "PostgreSQL",
      "MySQL",
      "RESTful APIs",
      "TCP/UDP Sockets",
      "JWT & Auth Workflows",
    ],
  },
  {
    title: "Tools, DevOps & AI",
    badge: "Production Ready",
    color: "border-neo-green bg-neo-green/10 text-neo-green",
    tags: [
      "Git & GitHub",
      "Vercel Deployment",
      "Selenium Automation",
      "Generative AI & LLM APIs",
      "VS Code & Linux CLI",
      "Postman",
      "Claude Code & Antigravity",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6 sm:py-32 bg-transparent transition-colors duration-300">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 inline-flex rounded-full border border-rose-400/30 bg-rose-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.35em] text-rose-400 dark:text-rose-300">
          Skills & Tech Stack
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-black tracking-[-0.08em] text-text sm:text-5xl lg:text-6xl">
              Job-Ready Arsenal
            </h2>
            <p className="mt-2 text-sm sm:text-base font-mono text-muted max-w-2xl">
              A comprehensive toolkit spanning systems engineering, modern web applications, scalable cloud backends, and AI automation.
            </p>
          </div>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-text rounded border-2 border-border bg-neo-yellow px-3 py-1 shadow-[2px_2px_0px_var(--border-color)] self-start sm:self-auto">
            Full Stack & Systems
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, groupIdx) => (
            <div
              key={group.title}
              className="glass-panel animate-fade-up rounded-[1.75rem] border-2 border-border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-neo-lg"
              style={{ animationDelay: `${groupIdx * 0.1}s` }}
            >
              <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-text">
                  {group.title}
                </h3>
                <span className={`rounded border px-2 py-0.5 text-[9px] font-mono font-black uppercase ${group.color}`}>
                  {group.badge}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tech-tag rounded-lg px-3 py-1.5 text-xs font-bold tracking-tight text-text transition-all duration-200 hover:-translate-y-0.5 hover:bg-surface-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Competencies & Stats */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Core Languages", value: "Java, C++, Py, PHP, JS", highlight: "bg-neo-teal text-black" },
            { label: "Full-Stack Web", value: "Next.js & Supabase", highlight: "bg-neo-lilac text-white" },
            { label: "AI Integration", value: "LLM Quiz Automation", highlight: "bg-neo-orange text-white" },
            { label: "Standard Practices", value: "Agile & Clean Architecture", highlight: "bg-neo-green text-black" },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass-panel animate-fade-up rounded-2xl border-2 border-border p-4 text-center hover:-translate-y-1 transition-all"
              style={{ animationDelay: `${(4 + i) * 0.08}s` }}
            >
              <p className="text-xs font-mono font-black uppercase tracking-wider text-muted">{stat.label}</p>
              <p className="mt-2 text-sm sm:text-base font-extrabold text-text">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
