const contactItems = [
  {
    label: "Email",
    value: "johneltongeromo@gmail.com",
    href: "mailto:johneltongeromo@gmail.com",
    icon: "✉",
  },
  {
    label: "Phone",
    value: "+639933023621",
    href: "tel:+639933023621",
    icon: "📞",
  },
  {
    label: "GitHub",
    value: "jjnix-john",
    href: "https://github.com/jjnix-john",
    icon: "<>",
  },
  {
    label: "LinkedIn",
    value: "john-elton-d-geromo",
    href: "https://www.linkedin.com/in/john-elton-d-geromo-726574406",
    icon: "in",
  },
];

export default function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 sm:py-32 bg-transparent transition-colors duration-300">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 inline-flex rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.35em] text-sky-400 dark:text-sky-300">
          About me
        </p>
        <h2 className="mb-12 text-4xl font-black tracking-[-0.08em] text-text sm:text-5xl lg:text-6xl">
          Who I am
        </h2>

        <div className="grid items-start gap-8 md:grid-cols-2 lg:gap-12">
          <div className="glass-panel animate-slide-in-left rounded-[2rem] border border-border p-6 sm:p-8">
            <div className="space-y-6 text-base font-medium leading-relaxed text-text/90 sm:text-lg">
              <p>
                I&apos;m a <span className="font-black text-sky-400 dark:text-sky-300">student & full-stack developer</span> based in <span className="font-black text-text">Mandaue City, Philippines</span>, passionate about building modern web applications, automation tools, and exploring AI/software systems. I enjoy working across the stack — from crafting polished UIs with React and Tailwind to wiring up backends with Node.js, Supabase, and Python.
              </p>
              <p>
                Beyond web development, I dive into academic research on AI-powered developer tooling and networking systems. I&apos;m driven by curiosity about how systems work under the hood, and I love turning ideas into practical, working software.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.32em] text-muted">Main focus areas</p>
              <ul className="space-y-3 text-sm font-semibold text-text/95">
                {[
                  "Full Stack Development (React, Next.js, Node.js)",
                  "Software Architecture & Design Patterns",
                  "AI/LLM Integration & Automation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-surface-secondary/40 px-3 py-2">
                    <span className="mt-0.5 text-base text-sky-400 dark:text-sky-300">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4 animate-slide-in-right">
            <p className="text-[10px] font-black uppercase tracking-[0.32em] text-rose-400 dark:text-rose-300">Get in touch</p>
            {contactItems.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-[1.5rem] border border-border bg-surface-secondary/40 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-surface-secondary/60"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-500/10 text-lg font-black text-sky-400 dark:text-sky-300 transition-transform duration-300 group-hover:rotate-12">
                  {item.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-black uppercase tracking-[0.28em] text-muted">{item.label}</div>
                  <div className="truncate text-sm font-bold text-text transition-colors duration-300 group-hover:text-primary sm:text-base">
                    {item.value}
                  </div>
                </div>
                <span className="text-xl text-text/60 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
