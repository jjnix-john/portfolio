import { useState } from "react";

const resumeUrl = "/files/Geromo_John_Elton_D_FlowCV_Resume_2026-08-02.pdf";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("interests");

  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 pb-24 pt-36 sm:px-6 lg:px-8 bg-transparent"
    >
      {/* Retro Dot Grid Background decoration */}
      <div className="absolute inset-0 bg-retro-grid pointer-events-none z-0" />

      <div className="relative mx-auto max-w-6xl z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          
          {/* Left Content Column */}
          <div className="space-y-8 text-left">
            <div className="space-y-5">
              
              {/* Status Pills / Badges */}
              <div className="flex flex-wrap gap-2.5 animate-fade-in">
                <span className="inline-flex items-center gap-2 rounded border-2 border-border bg-neo-green px-3.5 py-1.5 text-xs font-mono font-black uppercase text-black shadow-[2px_2px_0px_var(--border-color)]">
                  <span className="h-2 w-2 rounded-full bg-black animate-pulse" />
                  Available for Work
                </span>
                <span className="inline-flex items-center rounded border-2 border-border bg-neo-lilac px-3.5 py-1.5 text-xs font-mono font-black uppercase text-white shadow-[2px_2px_0px_var(--border-color)]">
                  Full-Stack Developer
                </span>
              </div>

              {/* Bold Neubrutalist Typography Headline */}
              <h1 className="font-extrabold tracking-tight text-5xl sm:text-7xl lg:text-8xl leading-none animate-fade-up">
                <span className="block text-text">
                  John Elton
                </span>
                <span className="inline-block bg-neo-yellow text-black border-4 border-border px-4 py-1 mt-2 rotate-[-1deg] shadow-[4px_4px_0px_var(--border-color)]">
                  Geromo
                </span>
              </h1>
            </div>

            {/* Subheading & Technical tags */}
            <div className="space-y-6 animate-fade-up stagger-1">
              <p className="max-w-xl text-lg font-bold leading-relaxed text-muted sm:text-xl font-mono">
                &gt;_ Full Stack Developer building scalable web applications with React, Next.js, Node.js, and Supabase. Passionate about AI integration and robust backend systems in Java, C++, Python & PHP.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="rounded border-2 border-border bg-surface px-3 py-1 text-xs font-bold uppercase tracking-wider text-text shadow-[2px_2px_0px_var(--border-color)]">
                  📍 Mandaue City, PH
                </span>
                <span className="rounded border-2 border-border bg-surface px-3 py-1 text-xs font-bold uppercase tracking-wider text-text shadow-[2px_2px_0px_var(--border-color)]">
                  🎓 BSIT @ UCLM
                </span>
                <span className="rounded border-2 border-border bg-surface px-3 py-1 text-xs font-bold uppercase tracking-wider text-text shadow-[2px_2px_0px_var(--border-color)]">
                  🏆 IBM-Coached Finalist
                </span>
              </div>
            </div>

            {/* Action Buttons with Neubrutalist translation click animations */}
            <div className="flex flex-col gap-4 sm:flex-row pt-2 animate-fade-up stagger-2">
              <a
                href="#projects"
                className="btn-neo bg-neo-teal text-black px-8 py-4 text-xs font-black shadow-neo"
              >
                View Work
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-neo bg-neo-orange text-white px-8 py-4 text-xs font-black shadow-neo"
              >
                Download CV
              </a>
            </div>

            {/* Tech Stack Pills (Styled like Chrome Badge Stickers) */}
            <div className="pt-4 animate-fade-up stagger-3">
              <p className="mb-3 font-mono text-xs font-black uppercase tracking-widest text-text">
                [Core Tech Stack & Languages]
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "React", bg: "bg-neo-teal text-black" },
                  { name: "Next.js", bg: "bg-neo-lilac text-white" },
                  { name: "Java", bg: "bg-neo-orange text-white" },
                  { name: "C++", bg: "bg-neo-yellow text-black" },
                  { name: "Python", bg: "bg-neo-green text-black" },
                  { name: "PHP", bg: "bg-neo-pink text-black" },
                  { name: "Node.js", bg: "bg-neo-teal text-black" },
                  { name: "Supabase", bg: "bg-neo-green text-black" },
                  { name: "SQL", bg: "bg-neo-yellow text-black" },
                  { name: "Tailwind CSS", bg: "bg-neo-pink text-black" },
                ].map((tech) => (
                  <span
                    key={tech.name}
                    className={`tech-tag rounded px-3 py-1.5 text-xs font-mono font-extrabold uppercase tracking-wide border-2 border-border ${tech.bg} shadow-[2px_2px_0px_var(--border-color)]`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Retro-Futuristic Terminal Window */}
          <div className="relative mx-auto w-full max-w-md pt-8 lg:pt-0 animate-fade-up stagger-4 z-10">
            <div className="glass-panel overflow-hidden border-2 border-border bg-surface p-4 shadow-neo-lg crt-scanlines">
              
              {/* Terminal Header */}
              <div className="mb-4 flex items-center justify-between border-b-2 border-border pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full border border-border bg-neo-orange" />
                  <span className="h-3 w-3 rounded-full border border-border bg-neo-yellow" />
                  <span className="h-3 w-3 rounded-full border border-border bg-neo-green" />
                </div>
                <span className="font-mono text-xs font-extrabold text-text">
                  system_profile.sh
                </span>
                <span className="rounded bg-neo-pink px-1.5 py-0.5 text-[9px] font-mono font-bold text-black border border-border">
                  v2.0.26
                </span>
              </div>
              
              {/* Terminal Code Simulator */}
              <div className="font-mono text-xs leading-relaxed space-y-3">
                <div>
                  <div className="text-muted">$ whoami</div>
                  <div className="text-neo-teal font-bold">&gt; John Elton Geromo (Full Stack Developer)</div>
                </div>
                
                <div>
                  <div className="text-muted">$ check_status --verbose</div>
                  <div className="bg-surface-secondary/70 p-2.5 rounded border border-dashed border-border text-[11px] space-y-1">
                    <p className="text-neo-green font-bold">● Status: Active & Available for Roles</p>
                    <p className="text-text">● Co-Engineer: Tuon.net (AI Study App)</p>
                    <p className="text-text">● Latest Deploy: BoxedLinks (Cloud Sharing)</p>
                  </div>
                </div>

                {/* Remade Interactive Section: Replaced broken ASCII art */}
                <div>
                  <div className="flex items-center justify-between text-muted mb-1.5">
                    <span>$ run query_{activeTab}</span>
                    <span className="text-[10px] text-neo-teal font-mono">[interactive]</span>
                  </div>

                  {activeTab === "interests" && (
                    <div className="bg-surface-secondary/70 p-2.5 rounded border border-dashed border-border text-[11px] space-y-1.5 animate-fade-in">
                      <div className="flex items-start gap-2">
                        <span className="text-neo-teal font-bold">▸</span>
                        <span className="text-text"><strong className="text-neo-teal">Full-Stack Web:</strong> React, Next.js, Node.js & Supabase</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-neo-orange font-bold">▸</span>
                        <span className="text-text"><strong className="text-neo-orange">AI Integration:</strong> LLM APIs & automated quizzes (Tuon.net)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-neo-lilac font-bold">▸</span>
                        <span className="text-text"><strong className="text-neo-lilac">Systems & Core:</strong> Java (TCP/UDP), C++, Python, PHP & SQL</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-neo-green font-bold">▸</span>
                        <span className="text-text"><strong className="text-neo-green">Cloud Architecture:</strong> Drive-style storage (BoxedLinks)</span>
                      </div>
                    </div>
                  )}

                  {activeTab === "stack" && (
                    <div className="bg-surface-secondary/70 p-2.5 rounded border border-dashed border-border text-[11px] space-y-1 animate-fade-in">
                      <p className="text-text"><span className="text-neo-yellow font-bold">LANGS:</span> JS, Java, C++, Python, PHP, SQL, C</p>
                      <p className="text-text"><span className="text-neo-teal font-bold">WEB:</span> React, Next.js, Node.js, Tailwind CSS</p>
                      <p className="text-text"><span className="text-neo-orange font-bold">DATA:</span> Supabase, PostgreSQL, REST APIs</p>
                      <p className="text-text"><span className="text-neo-lilac font-bold">TOOLS:</span> Git/GitHub, Vercel, Selenium, Claude</p>
                    </div>
                  )}

                  {activeTab === "awards" && (
                    <div className="bg-surface-secondary/70 p-2.5 rounded border border-dashed border-border text-[11px] space-y-1.5 animate-fade-in">
                      <p className="text-neo-yellow font-bold">★ Finalist, IBPAP Hackathon (IBM-Coached)</p>
                      <p className="text-neo-orange font-bold">★ 3rd Place, CCS Days Hackathon 2025</p>
                      <p className="text-neo-teal font-bold">★ TOPCIT Level 2 ICT Certified</p>
                      <p className="text-neo-green font-bold">★ EF SET C1 Advanced English Certificate</p>
                    </div>
                  )}

                  {/* Interactive Terminal Action Tabs */}
                  <div className="mt-2.5 flex items-center gap-1.5 pt-1">
                    <span className="text-[10px] text-muted font-bold">CMD:</span>
                    <button
                      type="button"
                      onClick={() => setActiveTab("interests")}
                      className={`rounded px-2 py-0.5 text-[10px] font-mono font-bold border transition-all ${
                        activeTab === "interests"
                          ? "bg-neo-teal text-black border-border shadow-[1px_1px_0px_var(--border-color)]"
                          : "bg-surface-secondary text-text border-border hover:bg-surface"
                      }`}
                    >
                      $ interests
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("stack")}
                      className={`rounded px-2 py-0.5 text-[10px] font-mono font-bold border transition-all ${
                        activeTab === "stack"
                          ? "bg-neo-yellow text-black border-border shadow-[1px_1px_0px_var(--border-color)]"
                          : "bg-surface-secondary text-text border-border hover:bg-surface"
                      }`}
                    >
                      $ stack
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("awards")}
                      className={`rounded px-2 py-0.5 text-[10px] font-mono font-bold border transition-all ${
                        activeTab === "awards"
                          ? "bg-neo-orange text-white border-border shadow-[1px_1px_0px_var(--border-color)]"
                          : "bg-surface-secondary text-text border-border hover:bg-surface"
                      }`}
                    >
                      $ awards
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row with Neubrutalist Cards */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 animate-fade-up stagger-5">
          {[
            { label: "Projects Built", value: "10+", color: "text-neo-orange" },
            { label: "Core Languages", value: "Java / C++ / Python", color: "text-neo-teal" },
            { label: "Hackathon Finalist", value: "IBM-Coached", color: "text-neo-lilac" },
            { label: "ICT Certified", value: "TOPCIT L2", color: "text-neo-green" },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass-panel bg-surface p-5 border-2 border-border shadow-neo hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_var(--border-color)] transition-all"
            >
              <p className={`text-2xl sm:text-3xl font-black font-mono tracking-tight ${stat.color}`}>
                {stat.value}
              </p>
              <p className="mt-2 text-[10px] font-mono font-black uppercase tracking-widest text-text">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
