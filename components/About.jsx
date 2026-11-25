import { useState } from "react";

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
    type: "Champion",
    badge: "November 2026",
    title: "Champion, ICS x IBM Bobathon",
    subtitle: "1st Place Winner (2026)",
    desc: "Won 1st Place Champion at the ICS x IBM Bobathon 2026 by engineering innovative AI-driven solutions under pressure.",
    color: "bg-neo-yellow text-black",
    imagePlaceholder: true,
  },
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
    color: "bg-neo-orange text-white",
  },
  {
    type: "Award",
    badge: "2025 - 2026",
    title: "3rd Place CCS Days & 4th Place ICT Congress",
    subtitle: "University of Cebu - UCLM Hackathons",
    desc: "Placed 3rd at CCS Days Hackathon 2025 and 4th at ICT Congress Hackathon 2026 through rapid prototyping and system engineering.",
    color: "bg-neo-pink text-black",
  },
  {
    type: "Certification",
    badge: "Nov 2026",
    title: "IBM SkillsBuild: IBM Bob & AI Suite",
    subtitle: "3x Completion Certificates",
    desc: "Completed: Build with IBM Bob: From Ideas to Intelligent Solutions, How IBM Bob and AI Tools Are Changing the Way Solutions Are Built, and Planning a Website for a Small Business with IBM Bob.",
    color: "bg-neo-green text-black",
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

const ibmCertifications = [
  {
    title: "Build with IBM Bob: From Ideas to Intelligent Solutions",
    issuer: "IBM SkillsBuild",
    code: "URL-1C57430A84C1",
    date: "17 Nov 2026",
    file: "/files/IBM_Bob_Build_Intelligent_Solutions_Certificate.pdf",
  },
  {
    title: "How IBM Bob and AI Tools Are Changing the Way Solutions Are Built",
    issuer: "IBM SkillsBuild",
    code: "ALM-COURSE_4076311",
    date: "17 Nov 2026",
    file: "/files/IBM_Bob_AI_Tools_Changing_Solutions_Certificate.pdf",
  },
  {
    title: "Planning a Website for a Small Business with IBM Bob",
    issuer: "IBM SkillsBuild",
    code: "ALM-COURSE_4082657",
    date: "17 Nov 2026",
    file: "/files/IBM_Bob_Planning_Website_Small_Business_Certificate.pdf",
  },
];

export default function About() {
  const [selectedImage, setSelectedImage] = useState(null);

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
                I build and deploy production web applications with <span className="font-bold text-text">React, Next.js, Node.js, Tailwind CSS, and Supabase</span>, implementing authentication, secure cloud storage, and generative AI features like <span className="font-bold text-text">Tuon.net</span>. I also write robust backend and systems code in <span className="font-bold text-text">Java, C++, Python, PHP, C, and SQL</span>.
              </p>
              <p>
                I thrive under pressure: I won <span className="font-black text-neo-yellow">Champion at the ICS x IBM Bobathon 2026</span>, was a finalist at the <span className="font-bold text-text">IBPAP Hackathon coached by IBM engineers</span>, placed 3rd at <span className="font-bold text-text">CCS Days Hackathon 2025</span>, and 4th at <span className="font-bold text-text">ICT Congress Hackathon 2026</span>.
              </p>
              <p className="text-sm text-muted font-normal">
                TOPCIT Level 2 certified, EF SET C1 (Advanced) English holder, and completed three IBM SkillsBuild courses on IBM Bob. Seeking a Full Stack or Front-End Developer role.
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

          {/* Featured Champion Highlight Banner */}
          <div className="mb-8 rounded-2xl border-2 border-border bg-surface p-6 shadow-neo relative overflow-hidden">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_1.2fr] items-center">
              <div className="space-y-3.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded border-2 border-border bg-neo-yellow px-3 py-1 text-[10px] font-mono font-black uppercase text-black shadow-[2px_2px_0px_var(--border-color)]">
                    🏆 1st Place Champion
                  </span>
                  <span className="rounded border border-border bg-surface-secondary px-2.5 py-1 text-[10px] font-mono font-bold text-muted">
                    November 19 – 20, 2026
                  </span>
                  <span className="rounded border border-border bg-neo-teal px-2.5 py-1 text-[10px] font-mono font-black uppercase text-black">
                    UC Team
                  </span>
                </div>
                <h4 className="text-2xl sm:text-3xl font-black tracking-tight text-text">
                  ICS x IBM Bobathon Champion 2026
                </h4>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 dark:text-sky-300">
                  &ldquo;Future Builders: From Ideas to Impact&rdquo;
                </p>
                <p className="text-sm text-text/90 leading-relaxed font-medium">
                  Won 1st Place Champion at the ICS x IBM Bobathon 2026 (hosted by Integrated Computer Systems &amp; IBM Gold Partner) by designing and building intelligent AI-powered solutions with IBM Bob under competitive hackathon constraints.
                </p>
                <p className="text-[11px] font-mono text-muted">
                  Click any photo to view full size.
                </p>
              </div>

              {/* Champion Photo Showcase Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-[1.35fr_0.85fr] gap-3.5">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedImage({
                      src: "/files/bobathon-team.jpg",
                      title: "ICS x IBM Bobathon 2026 — 1st Place Champion Team",
                    })
                  }
                  className="group relative h-52 sm:h-56 w-full overflow-hidden rounded-xl border-2 border-border bg-surface-secondary shadow-neo text-left transition-all hover:-translate-y-1"
                >
                  <img
                    src="/files/bobathon-team.jpg"
                    alt="ICS x IBM Bobathon 2026 1st Place Champion Team"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3">
                    <span className="inline-block rounded border border-black bg-neo-yellow px-2 py-0.5 font-mono text-[9px] font-black uppercase text-black">
                      Champion Team
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedImage({
                      src: "/files/bobathon-trophy.jpg",
                      title: "ICS x IBM Bobathon 2026 — 1st Place Trophy & Plaque",
                    })
                  }
                  className="group relative h-52 sm:h-56 w-full overflow-hidden rounded-xl border-2 border-border bg-surface-secondary shadow-neo text-left transition-all hover:-translate-y-1"
                >
                  <img
                    src="/files/bobathon-trophy.jpg"
                    alt="ICS x IBM Bobathon 2026 1st Place Trophy"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3">
                    <span className="inline-block rounded border border-black bg-neo-teal px-2 py-0.5 font-mono text-[9px] font-black uppercase text-black">
                      1st Place Trophy
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Fullscreen Image Lightbox Modal */}
          {selectedImage && (
            <div
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fade-in"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl w-full overflow-hidden rounded-2xl border-2 border-border bg-surface p-3 shadow-neo-lg"
              >
                <div className="mb-2.5 flex items-center justify-between border-b border-border pb-2 px-1">
                  <span className="font-mono text-xs font-black text-text">
                    {selectedImage.title}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedImage(null)}
                    className="rounded-lg border-2 border-border bg-neo-orange px-2.5 py-0.5 font-mono text-xs font-black text-white shadow-[2px_2px_0px_#000] hover:brightness-110"
                  >
                    ✕ Close
                  </button>
                </div>
                <div className="overflow-hidden rounded-xl border border-border bg-black flex items-center justify-center max-h-[75vh]">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="max-h-[75vh] w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

          {/* Newest IBM SkillsBuild Certifications Section */}
          <div className="mt-12">
            <div className="mb-4 flex items-center justify-between">
              <h4 className="text-lg font-black tracking-tight text-text sm:text-xl">
                Latest Certifications (IBM SkillsBuild)
              </h4>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-neo-teal">
                Nov 2026
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {ibmCertifications.map((cert) => (
                <a
                  key={cert.code}
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass-panel rounded-2xl border-2 border-border bg-surface-secondary/40 p-4 flex flex-col justify-between transition-all hover:-translate-y-1 hover:border-neo-teal shadow-neo"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="rounded border border-border bg-neo-teal px-2 py-0.5 text-[9px] font-mono font-black uppercase text-black">
                        {cert.issuer}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-muted">{cert.date}</span>
                    </div>
                    <h5 className="font-extrabold text-text text-sm leading-snug group-hover:text-neo-teal transition-colors">
                      {cert.title}
                    </h5>
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-border/60 pt-2 text-[10px] font-mono text-muted">
                    <span>ID: {cert.code}</span>
                    <span className="font-bold text-neo-teal group-hover:translate-x-0.5 transition-transform">
                      View PDF →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
