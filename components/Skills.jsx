const skillGroups = [
  {
    title: "Frontend",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend / Infra",
    tags: ["Supabase", "Node.js", "Python"],
  },
  {
    title: "Languages",
    tags: ["JavaScript", "Python", "Java"],
  },
  {
    title: "Other",
    tags: ["REST/HTTP/TCP/UDP", "Selenium", "AI/LLM (Claude API)"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-stone-50">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-sm font-semibold tracking-widest uppercase text-sky-500 mb-3">
          Skills
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900 mb-12">
          Tech &amp; Tools
        </h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-md hover:border-stone-300 transition-all"
            >
              <h3 className="text-xs font-bold tracking-widest uppercase text-sky-500 mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 bg-stone-50 border border-stone-200 rounded-full text-sm font-medium text-stone-700 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
