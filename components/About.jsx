const contactItems = [
  {
    label: "Email",
    value: "johneltongeromo438@gmail.com",
    href: "mailto:johneltongeromo438@gmail.com",
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

const credentials = [
  {
    type: "Experience",
    badge: "Jan 2025 - Present",
    title: "Co-Engineer @ Tuon.net",
    subtitle: "AI-Powered Study Platform",
    desc: "Co-engineered an adaptive learning system converting raw study materials into generative AI-powered quizzes with real-time recommendations.",
    color: "bg-neo-teal text-black",
  },
  {
    type: "Award",
    badge: "August 2026",
    title: "Finalist, IBPAP Hackathon",
    subtitle: '"Can You Hack It?" (Coached by IBM)',
    desc: "1 of 20 competing schools nationwide, directly coached and mentored by IBM enterprise engineers.",
    color: "bg-neo-yellow text-black",
  },
  {
    type: "Award",
    badge: "2025",
    title: "3rd Place, CCS Days Hackathon",
    subtitle: "University of Cebu - UCLM",
    desc: "Rapid prototyping and system engineering under competitive time constraints.",
    color: "bg-neo-orange text-white",
  },
  {
    type: "Certification",
    badge: "Certified",
    title: "TOPCIT Level 2 & EF SET C1",
    subtitle: "ICT Competency & Advanced English",
    desc: "Practical Competency in ICT Level 2 certified. EF SET C1 (Advanced) certified for fluent technical collaboration.",
    color: "bg-neo-lilac text-white",
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

        {/* Bio & Contact Grid */}
        <div className="grid items-start gap-8 md:grid-cols-2 lg:gap-12">
          <div className="glass-panel animate-slide-in-left rounded-[2rem] border border-border p-6 sm:p-8">
            <div className="space-y-6 text-base font-medium leading-relaxed text-text/90 sm:text-lg">
              <p>
                I&apos;m a <span className="font-black text-sky-400 dark:text-sky-300">Full Stack Developer & IT Student</span> based in <span className="font-black text-text">Mandaue City, Philippines</span>, studying at the <span className="font-bold text-text">University of Cebu - Lapulapu and Mandaue Campus (UCLM)</span>.
              </p>
              <p>
                I build and deploy production web applications with <span className="font-bold text-text">React, Next.js, Node.js, Tailwind CSS, and Supabase</span>, implementing authentication, secure cloud storage, and generative AI features. I also write robust backend and systems code in <span className="font-bold text-text">Java, C++, Python, PHP, and SQL</span>.
              </p>
              <p className="text-sm text-muted font-normal">
                Seeking a Full Stack or Front-End Developer role where I can drive scalable web architecture and solve real-world problems.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.32em] text-muted">Core Focus & Strengths</p>
              <ul className="space-y-3 text-sm font-semibold text-text/95">
                {[
                  "Full Stack Development (React, Next.js, Node.js, Supabase)",
                  "Backend & Systems Engineering (Java, C++, Python, PHP, REST APIs)",
                  "Generative AI & LLM Integration (Tuon.net Quiz Automation)",
                  "Cloud Storage & Secure Auth Architecture (BoxedLinks)",
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

            {/* Education Highlight Card */}
            <div className="rounded-[1.5rem] border-2 border-border bg-surface p-5 shadow-neo">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted">Education</span>
                <span className="rounded bg-neo-teal px-2 py-0.5 text-[9px] font-mono font-black uppercase text-black">Degree</span>
              </div>
              <h4 className="font-extrabold text-text text-base">Bachelor of Science in Information Technology</h4>
              <p className="text-xs text-muted font-medium mt-1">University of Cebu - Lapulapu and Mandaue Campus (UCLM)</p>
            </div>
          </div>
        </div>

        {/* Experience, Hackathons & Certifications Highlights */}
        <div className="mt-16">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-2xl font-black tracking-tight text-text sm:text-3xl">
              Experience & Achievements
            </h3>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-muted">
              [Verified Credentials]
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {credentials.map((cred, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl border-2 border-border bg-surface p-5 flex flex-col justify-between hover:-translate-y-1 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`rounded border border-border px-2 py-0.5 text-[9px] font-mono font-black uppercase ${cred.color}`}>
                      {cred.type}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-muted">{cred.badge}</span>
                  </div>
                  <h4 className="font-black text-text text-base leading-snug">{cred.title}</h4>
                  <p className="text-xs font-bold text-sky-500 dark:text-sky-300 mt-0.5">{cred.subtitle}</p>
                  <p className="text-xs text-muted font-normal mt-2 leading-relaxed">{cred.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
