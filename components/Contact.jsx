const channels = [
  {
    label: "Email",
    value: "johneltongeromo@gmail.com",
    href: "mailto:johneltongeromo@gmail.com",
    icon: "✉",
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
  {
    label: "Phone",
    value: "+639933023621",
    href: "tel:+639933023621",
    icon: "📞",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-4 sm:px-6 py-24 sm:py-32 border-t border-border bg-transparent transition-colors duration-300"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center space-y-4">
          <p className="inline-flex rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.35em] text-sky-400 dark:text-sky-300">
            ↓ Contact Me ↓
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-text">
            LET&apos;S COLLABORATE
          </h2>
          <p className="mx-auto max-w-xl text-base sm:text-lg font-medium text-muted">
            Have a project, research idea, or just want to say hi? I&apos;m always open to new opportunities and conversations.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {channels.map((ch, i) => (
            <a
              key={ch.label}
              href={ch.href}
              target={ch.href.startsWith("http") ? "_blank" : undefined}
              rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="glass-panel group flex flex-col sm:flex-row items-center gap-4 rounded-[2rem] border border-border bg-surface-secondary/40 p-6 text-center sm:text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_15px_35px_rgba(56,189,248,0.12)] animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl border border-sky-400/30 bg-sky-500/10 text-sky-400 dark:text-sky-300 text-2xl font-black transition-transform duration-300 group-hover:rotate-12">
                {ch.icon}
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-black uppercase tracking-widest text-muted">{ch.label}</div>
                <div className="text-sm sm:text-base font-bold text-text truncate transition-colors duration-300 group-hover:text-primary">
                  {ch.value}
                </div>
              </div>
              <span className="ml-auto text-xl text-muted transition-transform duration-300 group-hover:translate-x-1.5 hidden sm:inline">
                →
              </span>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center space-y-6">
          <p className="font-black text-text text-lg sm:text-xl uppercase tracking-wider">
            or send me an email directly
          </p>
          <a
            href="mailto:johneltongeromo@gmail.com"
            className="inline-block rounded-2xl border border-sky-400/40 bg-gradient-to-r from-sky-400 to-cyan-300 px-8 sm:px-12 py-5 text-center font-black uppercase tracking-wider text-slate-950 shadow-[0_12px_30px_rgba(56,189,248,0.25)] transition-transform duration-300 hover:-translate-y-1 hover:brightness-105 active:translate-y-0 text-lg"
          >
            SEND EMAIL
          </a>
        </div>
      </div>
    </section>
  );
}
